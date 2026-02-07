/**
 * @gv-tech/eslint-config - TypeScript Configuration
 *
 * TypeScript-specific ESLint configuration using typescript-eslint v8.
 * Uses ESLint v9 flat config format.
 */

import tseslint from 'typescript-eslint';
import { base, commonIgnores, jsFiles } from './base.mjs';

/** File patterns for TypeScript files */
export const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

/** All JavaScript and TypeScript file patterns */
export const allJsTsFiles = [...jsFiles, ...tsFiles];

/**
 * TypeScript ESLint configuration.
 * Extends base configuration and adds TypeScript-specific rules.
 *
 * @example
 * ```js
 * // eslint.config.mjs
 * import { typescript } from '@gv-tech/eslint-config';
 *
 * export default [...typescript];
 * ```
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
  // Ensure JS files still get base rules
  {
    files: jsFiles,
    rules: {
      // Any JS-specific overrides if needed
    },
  },
];

export default typescript;
