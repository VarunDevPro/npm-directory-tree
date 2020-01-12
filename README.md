# npm-directory-tree

[![version](https://img.shields.io/npm/v/@varundevpro/directory-tree.svg?style=flat-square)](http://npm.im/@varundevpro/directory-tree)
[![install size](https://packagephobia.now.sh/badge?p=@varundevpro/directory-tree)](https://packagephobia.now.sh/result?p=@varundevpro/directory-tree)
[![downloads](https://img.shields.io/npm/dm/@varundevpro/directory-tree.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@varundevpro/directory-tree)
[![MIT License](https://img.shields.io/npm/l/@varundevpro/directory-tree.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Build Status](https://github.com/varundevpro/npm-directory-tree/workflows/CI/badge.svg?branch=master)](https://github.com/VarunDevPro/npm-directory-tree/actions)

## Usage

```js
lib.storeStructure(
  "<PATH_OF_TARGET_DIR>",
  "<PATH_WHERE_JSON_SHOULD_BE_STORED>"
);

// example
lib.storeStructure(process.cwd(), path.resolve(__dirname, "dir.json"));
```

## Contributing

### Code of Conduct

We adopt a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/VarunDevPro/npm-directory-tree/blob/master/.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## License

MIT
