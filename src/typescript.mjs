/**
 * @gv-tech/eslint-config - TypeScript Configuration
 *
 * TypeScript-specific ESLint configuration using typescript-eslint v8. Uses ESLint v9 flat config format.
 */

import tseslint from 'typescript-eslint';
import { base, commonIgnores, jsFiles } from './base.mjs';

/**
 * File patterns for TypeScript files
 *
 * @type {string[]}
 */
export const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

/**
 * All JavaScript and TypeScript file patterns
 *
 * @type {string[]}
 */
export const allJsTsFiles = [...jsFiles, ...tsFiles];

/**
 * TypeScript ESLint configuration. Extends base configuration and adds TypeScript-specific rules.
 *
 * @example
 *
 * ```js
 * // eslint.config.mjs
 * import { typescript } from '@gv-tech/eslint-config';
 *
 * export default [...typescript];
 * ```
 *
 * @type {import('eslint').Linter.Config[]}
 */
export const typescript = [
  // Global ignores
  {
    ignores: commonIgnores,
  },
  // Extend base JS config
  ...base.filter((config) => !config.ignores),
  // TypeScript configuration
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: tsFiles,
  })),
  {
    files: tsFiles,
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  // Ensure JS files still get base rules
  {
    files: jsFiles,
    rules: {
      // Any JS-specific overrides if needed
    },
  },
];

export default typescript;
