# @gv-tech/eslint-config

[![CI](https://github.com/Garcia-Ventures/eslint-config/actions/workflows/ci.yml/badge.svg)](https://github.com/Garcia-Ventures/eslint-config/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@gv-tech/eslint-config.svg)](https://www.npmjs.com/package/@gv-tech/eslint-config)
[![license](https://img.shields.io/npm/l/@gv-tech/eslint-config.svg)](https://github.com/Garcia-Ventures/eslint-config/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/@gv-tech/eslint-config.svg)](https://www.npmjs.com/package/@gv-tech/eslint-config)

Shareable ESLint configuration for Garcia Ventures projects. Uses **ESLint v9** flat config format (forward-compatible with v10).

## Features

- 🚀 **ESLint v9+ Flat Config** - Modern configuration format
- 📦 **Modular** - Use only what you need
- 🔷 **TypeScript** - First-class TypeScript support via typescript-eslint v8
- ⚛️ **Next.js** - Next.js 15+ with Core Web Vitals
- 💅 **Prettier** - Integrated formatting as ESLint rules

## Requirements

- Node.js >= 20.19.0
- ESLint >= 9.0.0

## Installation

Install `@gv-tech/eslint-config` along with its required peer dependencies using your preferred package manager:

| Manager  | Command                                                         |
| :------- | :-------------------------------------------------------------- |
| **npm**  | `npm install --save-dev @gv-tech/eslint-config eslint prettier` |
| **yarn** | `yarn add --dev @gv-tech/eslint-config eslint prettier`         |
| **pnpm** | `pnpm add -D @gv-tech/eslint-config eslint prettier`            |
| **bun**  | `bun add -d @gv-tech/eslint-config eslint prettier`             |

### With TypeScript

If you are using TypeScript, you also need to install the `typescript` package:

| Manager  | Command                             |
| :------- | :---------------------------------- |
| **npm**  | `npm install --save-dev typescript` |
| **yarn** | `yarn add --dev typescript`         |
| **pnpm** | `pnpm add -D typescript`            |

### With Next.js

For Next.js projects, add the Next.js ESLint plugin:

| Manager  | Command                                           |
| :------- | :------------------------------------------------ |
| **npm**  | `npm install --save-dev @next/eslint-plugin-next` |
| **yarn** | `yarn add --dev @next/eslint-plugin-next`         |
| **pnpm** | `pnpm add -D @next/eslint-plugin-next`            |

### With Prettier (Optional Shared Config)

The Prettier plugin is built-in. If you want to use the shared Garcia Ventures Prettier config:

| Manager  | Command                                          |
| :------- | :----------------------------------------------- |
| **npm**  | `npm install --save-dev @eng618/prettier-config` |
| **yarn** | `yarn add --dev @eng618/prettier-config`         |
| **pnpm** | `pnpm add -D @eng618/prettier-config`            |

> **Note:** Add `"prettier": "@eng618/prettier-config"` to your `package.json` to use the shared Prettier config.

## Usage

Create an `eslint.config.mjs` file in your project root:

### Basic JavaScript

```js
import { javascriptRecommended } from '@gv-tech/eslint-config';

export default [...javascriptRecommended];
```

### TypeScript Project

```js
import { typescript, prettier } from '@gv-tech/eslint-config';

export default [...typescript, ...prettier];
```

### Next.js Project

```js
import { next, prettier } from '@gv-tech/eslint-config';

export default [...next, ...prettier];
```

### Using Presets

For convenience, pre-combined presets are available:

```js
// TypeScript + Prettier (recommended)
import { recommended } from '@gv-tech/eslint-config';
export default [...recommended];

// Next.js + TypeScript + Prettier
import { nextjs } from '@gv-tech/eslint-config';
export default [...nextjs];
```

### Custom Configuration

Extend and customize as needed:

```js
import { typescript, prettier } from '@gv-tech/eslint-config';

export default [
  ...typescript,
  ...prettier,
  {
    // Add project-specific ignores
    ignores: ['custom-folder/**'],
  },
  {
    // Override rules
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
```

## Available Configurations

| Export                  | Description                         |
| ----------------------- | ----------------------------------- |
| `base`                  | Core JavaScript rules               |
| `typescript`            | TypeScript support (includes base)  |
| `next`                  | Next.js rules (includes TypeScript) |
| `prettier`              | Prettier formatting integration     |
| `recommended`           | TypeScript + Prettier               |
| `javascriptRecommended` | JavaScript + Prettier               |
| `nextjs`                | Next.js + Prettier                  |

## Exported Utilities

| Export          | Description              |
| --------------- | ------------------------ |
| `jsFiles`       | JavaScript file patterns |
| `tsFiles`       | TypeScript file patterns |
| `allJsTsFiles`  | All JS/TS file patterns  |
| `commonIgnores` | Common ignore patterns   |
| `nextIgnores`   | Next.js-specific ignores |

## License

MIT
