/**
 * @gv-tech/eslint-config - Prettier Configuration
 *
 * Prettier integration for ESLint - runs Prettier as an ESLint rule.
 * Uses @eng618/prettier-config for consistent formatting.
 * Uses ESLint v9 flat config format.
 */

import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { allJsTsFiles } from './typescript.mjs';

/**
 * Prettier ESLint configuration.
 * Disables formatting rules that conflict with Prettier and runs Prettier as an ESLint rule.
 * Uses @eng618/prettier-config for Prettier options.
 *
 * @example
 * ```js
 * // eslint.config.mjs
 * import { typescript, prettier } from '@gv-tech/eslint-config';
 *
 * export default [...typescript, ...prettier];
 * ```
 */
export const prettier = [
  // Disable ESLint rules that conflict with Prettier
  prettierConfig,
  // Run Prettier as an ESLint rule with @eng618/prettier-config
  {
    files: allJsTsFiles,
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  },
];

export default prettier;
