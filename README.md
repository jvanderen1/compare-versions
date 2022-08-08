[//]: # '![Build Status](https://github.com/omichelsen/compare-versions/actions/workflows/ci.yml/badge.svg)'
[//]: # '[![Coverage Status](https://coveralls.io/repos/omichelsen/compare-versions/badge.svg?branch=master&service=github)](https://coveralls.io/github/omichelsen/compare-versions?branch=master)'
[//]: # '[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/compare-versions.svg)](https://bundlephobia.com/result?p=compare-versions)'

Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.

- Runs in any Javascript environment.
- No dependencies.
- Tiny build size.

Supports the full semver specification including versions with different number of digits like `1.0.0`, `1.0`, `1` and pre-releases like `1.0.0-alpha`. Additionally supports the following variations:

- Wildcards for minor and patch version like `1.0.x` or `1.0.*`.
- [Chromium version numbers](https://www.chromium.org/developers/version-numbers) with 4 parts, e.g. version `25.0.1364.126`.
- Any leading `v` is ignored, e.g. `v1.0` is interpreted as `1.0`.
- Leading zero is ignored, e.g. `1.01.1` is interpreted as `1.1.1`.

## Install ⬇️

```shell
npm install @jvanderen1/compare-versions
```

## Documentation 📕

Please visit ...

## Compatability 🤝

The following bundles are generated:

| Module Type | File Name               |
| ----------- | ----------------------- |
| ESM         | compare-versions.mjs    |
| CommonJS    | compare-versions.cjs    |
| UMD         | compare-versions.umd.js |
