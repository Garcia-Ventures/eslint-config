/**
 * @gv-tech/eslint-config - Base Configuration
 *
 * Core ESLint configuration with recommended JavaScript rules. Uses ESLint v10 flat config format.
 */

import js from '@eslint/js';
import globals from 'globals';

/** File patterns for JavaScript files */
export const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];

/** Common ignore patterns */
export const commonIgnores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
  '**/.git/**',
  '**/.yarn/**',
];

// Helper to ensure we have an array of configs
const ensureArray = (config) => (Array.isArray(config) ? config : [config]);

/** Base ESLint configuration for JavaScript projects. */
export const base = [
  // Global ignores
  {
    ignores: commonIgnores,
  },
  // Base configuration for all JS files (properly handling array-based recommended configs)
  ...ensureArray(js.configs.recommended).map((config) => ({
    ...config,
    files: jsFiles,
  })),
  {
    files: jsFiles,
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
