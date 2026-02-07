# @gv-tech/eslint-config

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

```bash
npm install --save-dev @gv-tech/eslint-config eslint
```

### With TypeScript

```bash
npm install --save-dev @gv-tech/eslint-config eslint typescript-eslint typescript
```

### With Next.js

```bash
npm install --save-dev @gv-tech/eslint-config eslint typescript-eslint typescript @next/eslint-plugin-next
```

### With Prettier

```bash
npm install --save-dev @gv-tech/eslint-config eslint eslint-plugin-prettier eslint-config-prettier @eng618/prettier-config
```

> **Note:** Add `"prettier": "@eng618/prettier-config"` to your `package.json` to use the shared Prettier config.

## Usage

Create an `eslint.config.mjs` file in your project root:

### Basic JavaScript

```js
import { base } from '@gv-tech/eslint-config';

export default [...base];
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

| Export        | Description                        |
| ------------- | ---------------------------------- |
| `base`        | Core JavaScript rules              |
| `typescript`  | TypeScript support (includes base) |
| `next`        | Next.js 16+ (includes TypeScript)  |
| `prettier`    | Prettier formatting integration    |
| `recommended` | TypeScript + Prettier              |
| `nextjs`      | Next.js + Prettier                 |

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
