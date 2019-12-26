let fs = require("fs");
let path = require("path");

let lib = {};

function getStructure(dir, callback) {
  var results = [];
  var total = { files: 0, folders: 0 };

  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);

    var itemsLeft = list.length;

    if (!itemsLeft)
      return callback(
        null,
        { name: path.basename(dir), type: "folder", children: results },
        total
      );

    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          getStructure(file, function(err, res, tot) {
            total.folders = total.folders + tot.folders + 1;
            total.files = total.files + tot.files;
            results.push({
              name: path.basename(file),
              type: "folder",
              dateModified: new Date(stat.mtimeMs).toLocaleDateString(),
              children: res
            });
            if (!--itemsLeft) callback(null, results, total);
          });
        } else {
          results.push({ type: "file", name: path.basename(file) });
          total.files++;
          if (!--itemsLeft) callback(null, results, total);
        }
      });
    });
  });
}

function traverseStructure(structure, basepath, onFolderFound, onFileFound) {
  structure.forEach(function(object) {
    if (object.type === "folder" && object.children.length > 0) {
      onFolderFound(object, basepath);
      traverseStructure(
        object.children,
        basepath ? basepath + "/" + object.name : object.name,
        onFolderFound,
        onFileFound
      );
    }

    if (object.type === "file") {
      onFileFound(object, basepath);
    }
  });
}

lib.storeStructure = (target_dirpath, store_filepath) => {
  lib.getStructure(target_dirpath, function(err, structure, total) {
    if (err) console.log(err);

    console.log(
      "there are a total of: ",
      total.folders,
      " folders and ",
      total.files,
      " files"
    );
    fs.writeFileSync(store_filepath, JSON.stringify(structure, null, 2));
    console.log(
      `The tree JSON is stored: ${total.folders} folders and ${total.files} files`
    );
  });
};

lib.getStructure = getStructure;
lib.traverseStructure = traverseStructure;
module.exports = lib;
