# Changelog

## [0.1.13](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.12...eslint-config-v0.1.13) (2026-03-05)


### Documentation

* Update README.md for improved structure and clarity ([99cf1c9](https://github.com/Garcia-Ventures/eslint-config/commit/99cf1c9eb827d91a209b926c6ce764ca6d5fc4c2))

## [0.1.12](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.11...eslint-config-v0.1.12) (2026-03-05)


### Bug Fixes

* Change publish command from bun to npm in release workflow ([b20df91](https://github.com/Garcia-Ventures/eslint-config/commit/b20df917fcb37565cdd43cd6c7fdb5d94c065c52))

## [0.1.11](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.10...eslint-config-v0.1.11) (2026-03-05)


### Features

* Force release ([6538150](https://github.com/Garcia-Ventures/eslint-config/commit/653815019d2a304e49ec6f8e4f51c55a004fb62f))

## [0.1.10](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.9...eslint-config-v0.1.10) (2026-03-05)


### Features

* Add ESLint configuration and integrate unused imports plugin ([9060de5](https://github.com/Garcia-Ventures/eslint-config/commit/9060de5c9b5d14b4e79b83eb85ebd11634e63d21))

## [0.1.9](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.8...eslint-config-v0.1.9) (2026-03-05)


### Features

* **bun:** Migrate yarn to bun ([7d5b49d](https://github.com/Garcia-Ventures/eslint-config/commit/7d5b49db5749608f2c37ed8194e69f058c1332ad))

## [0.1.8](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.7...eslint-config-v0.1.8) (2026-02-08)


### Features

* Add `@eng618/prettier-config` to devDependencies. ([0faccc8](https://github.com/Garcia-Ventures/eslint-config/commit/0faccc8384bbf6ad84980f9288eda793cade90ef))
* Introduce `javascriptRecommended` configuration, move core ESLint plugins to direct dependencies, and update README installation instructions. ([d89fc18](https://github.com/Garcia-Ventures/eslint-config/commit/d89fc18565524c0658042111e5cd70a2b34a40d8))

## [0.1.7](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.6...eslint-config-v0.1.7) (2026-02-08)


### Features

* Add blackbox tests for various ESLint configurations and integrate them into CI/CD workflows. ([005ebc7](https://github.com/Garcia-Ventures/eslint-config/commit/005ebc74fc40a11c4fb6eba1b3e7326dbde29d2a))
* Dynamically import the Next.js ESLint plugin to make it optional and consolidate Next.js configurations into the main package exports. ([01cb660](https://github.com/Garcia-Ventures/eslint-config/commit/01cb660e2307e56b373a8620972991f335e8a5fd))
* Introduce unit tests for ESLint configurations and update package scripts and CI workflow to include them. ([da749c0](https://github.com/Garcia-Ventures/eslint-config/commit/da749c02489c70ce472e8c2e926e9941c4a74326))


### Bug Fixes

* Enhance ESLint configurations to robustly handle array-based recommended configs and remove a JSDoc example. ([4d0de8e](https://github.com/Garcia-Ventures/eslint-config/commit/4d0de8e66cd01698e999eb3bcf9f01714fefa17e))

## [0.1.6](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.5...eslint-config-v0.1.6) (2026-02-08)


### Documentation

* Add CI, npm version, license, and npm downloads badges to README ([b25afc9](https://github.com/Garcia-Ventures/eslint-config/commit/b25afc968b619fa46342fd018cfd3a97f861ff49))

## [0.1.5](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.4...eslint-config-v0.1.5) (2026-02-07)


### Bug Fixes

* Remove explicit `NPM_TOKEN` environment variable from the npm publish step. ([b924c15](https://github.com/Garcia-Ventures/eslint-config/commit/b924c153b36c664bfa8870d21481880de44d6228))

## [0.1.4](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.3...eslint-config-v0.1.4) (2026-02-07)


### Features

* Force release ([ef98c9c](https://github.com/Garcia-Ventures/eslint-config/commit/ef98c9cd541ffb3c36f8a63e6df0be2981bc2b4a))

## [0.1.3](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.2...eslint-config-v0.1.3) (2026-02-07)


### Features

* Update Prettier configuration, remove organize imports plugin, and add lint-staged setup. ([a5c41d0](https://github.com/Garcia-Ventures/eslint-config/commit/a5c41d087c348c6a26045902c9b00538d5bc7814))
* Upgrade Node.js to v24, update ESLint dependencies, and configure pre-commit hooks. ([9013d20](https://github.com/Garcia-Ventures/eslint-config/commit/9013d20332f02de4ac54ad2fb0c0638aa3956205))

## [0.1.2](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.1...eslint-config-v0.1.2) (2026-02-07)


### Features

* Migrate package management from npm to Yarn. ([d2b90f3](https://github.com/Garcia-Ventures/eslint-config/commit/d2b90f3497d298e40cb25d68ee03fa4db71aa0a3))

## [0.1.1](https://github.com/Garcia-Ventures/eslint-config/compare/eslint-config-v0.1.0...eslint-config-v0.1.1) (2026-02-07)


### Features

* Enable Dependabot version updates for npm. ([7f78c4b](https://github.com/Garcia-Ventures/eslint-config/commit/7f78c4b218b85f8ad68f3e6558f8903855ee430d))
* Implement CI/CD workflows for linting, package validation, and automated releases with Release Please. ([cb12d29](https://github.com/Garcia-Ventures/eslint-config/commit/cb12d294e284949b7ab5ed7c357d55534a82f0c6))
* initialize shareable ESLint configuration package with flat config support for JavaScript, TypeScript, Next.js, and Prettier. ([3fa599a](https://github.com/Garcia-Ventures/eslint-config/commit/3fa599a4d18128b6ffd99b78d857404a8c1b5554))
