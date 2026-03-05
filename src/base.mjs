/**
 * @gv-tech/eslint-config - Base Configuration
 *
 * Core ESLint configuration with recommended JavaScript rules. Uses ESLint v10 flat config format.
 */

import js from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

/**
 * File patterns for JavaScript files
 *
 * @type {string[]}
 */
export const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];

/**
 * Common ignore patterns
 *
 * @type {string[]}
 */
export const commonIgnores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
  '**/.git/**',
  '**/.next/**',
  '**/.nuxt/**',
  '**/.turbo/**',
  '**/.cache/**',
  '**/.yarn/**',
  '**/out/**',
  '**/public/build/**',
];

// Helper to ensure we have an array of configs
const ensureArray = (config) => (Array.isArray(config) ? config : [config]);

/**
 * Base ESLint configuration for JavaScript projects. Includes recommended JS rules and common ignores.
 *
 * @type {import('eslint').Linter.Config[]}
 */
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
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
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
