/**
 * @gv-tech/eslint-config - Base Configuration
 *
 * Core ESLint configuration with recommended JavaScript rules.
 * Uses ESLint v10 flat config format.
 */

import js from '@eslint/js';
import globals from 'globals';

/** File patterns for JavaScript files */
export const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];

/** Common ignore patterns */
export const commonIgnores = ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '**/.git/**'];

/**
 * Base ESLint configuration for JavaScript projects.
 *
 * @example
 * ```js
 * // eslint.config.mjs
 * import { base } from '@gv-tech/eslint-config';
 *
 * export default [...base];
 * ```
 */
export const base = [
  // Global ignores
  {
    ignores: commonIgnores,
  },
  // Base configuration for all JS files
  {
    files: jsFiles,
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];

export default base;
