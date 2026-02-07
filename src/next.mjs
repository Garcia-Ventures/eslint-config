/**
 * @gv-tech/eslint-config - Next.js Configuration
 *
 * Next.js 15+ ESLint configuration with Core Web Vitals. Uses ESLint v9 flat config format.
 */

import nextPlugin from '@next/eslint-plugin-next';
import { commonIgnores } from './base.mjs';
import { allJsTsFiles, typescript } from './typescript.mjs';

/** Next.js specific ignore patterns */
export const nextIgnores = [...commonIgnores, '.next/**', 'out/**', 'next-env.d.ts'];

/**
 * Next.js ESLint configuration. Extends TypeScript configuration and adds Next.js-specific rules.
 *
 * @example
 *
 * ```js
 * // eslint.config.mjs
 * import { next } from '@gv-tech/eslint-config';
 *
 * export default [...next];
 * ```
 */
export const next = [
  // Global ignores including Next.js specific
  {
    ignores: nextIgnores,
  },
  // Extend TypeScript config
  ...typescript.filter((config) => !config.ignores),
  // Next.js plugin configuration
  {
    files: allJsTsFiles,
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      // Core Web Vitals rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];

export default next;
