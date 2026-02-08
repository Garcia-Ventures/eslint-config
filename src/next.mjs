/**
 * @gv-tech/eslint-config - Next.js Configuration
 *
 * Next.js 15+ ESLint configuration with Core Web Vitals. Uses ESLint v9 flat config format.
 */

import { commonIgnores } from './base.mjs';
import { prettier } from './prettier.mjs';
import { allJsTsFiles, typescript } from './typescript.mjs';

// Try to load the Next.js plugin dynamically to avoid crashing if it's not installed
let nextPlugin;
try {
  // Allow forcing missing state for tests
  if (process.env.ESLINT_CONFIG_FORCE_MISSING_NEXT === 'true') {
    throw new Error('Forced missing state for testing');
  }
  const mod = await import('@next/eslint-plugin-next');
  nextPlugin = mod.default;
} catch {
  if (process.env.ESLINT_CONFIG_FORCE_MISSING_NEXT !== 'true') {
    console.warn("Next.js plugin not found. It's optional.");
  }
}

/** Next.js specific ignore patterns */
export const nextIgnores = [...commonIgnores, '.next/**', 'out/**', 'next-env.d.ts'];

/** Next.js ESLint configuration. Extends TypeScript configuration and adds Next.js-specific rules. */
export const next = nextPlugin
  ? [
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
    ]
  : [
      {
        // If the plugin is missing, we provide a placeholder that informs the user
        // but doesn't crash the entire linting process unless this specific config is used.
        files: allJsTsFiles,
        rules: {
          'no-restricted-syntax': [
            'error',
            {
              selector: 'Program',
              message:
                "Next.js ESLint configuration was requested but '@next/eslint-plugin-next' is not installed. Please install it to enable Next.js rules.",
            },
          ],
        },
      },
    ];

/**
 * Recommended configuration for Next.js projects with Prettier. Combines Next.js (which includes TypeScript) and
 * Prettier configurations.
 */
export const nextjs = [...next, ...prettier];

export default next;
