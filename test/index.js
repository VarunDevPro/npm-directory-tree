let path = require("path");
let lib = require("../lib");

lib.storeStructure(process.cwd(), path.resolve(__dirname, "dir.json"));
