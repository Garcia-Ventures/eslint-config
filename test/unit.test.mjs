import assert from 'node:assert/strict';
import test from 'node:test';
import { base } from '../src/base.mjs';
import * as exports from '../src/index.mjs';
import { prettier } from '../src/prettier.mjs';
import { typescript } from '../src/typescript.mjs';

test('ESLint Config - Export Integrity', async (t) => {
  await t.test('should export all documented configurations', () => {
    assert.ok(exports.base, 'base config should be exported');
    assert.ok(exports.typescript, 'typescript config should be exported');
    assert.ok(exports.next, 'next config should be exported');
    assert.ok(exports.prettier, 'prettier config should be exported');
    assert.ok(exports.recommended, 'recommended preset should be exported');
    assert.ok(exports.nextjs, 'nextjs preset should be exported');
  });

  await t.test('should export all documented utilities', () => {
    assert.ok(exports.jsFiles, 'jsFiles should be exported');
    assert.ok(exports.tsFiles, 'tsFiles should be exported');
    assert.ok(exports.allJsTsFiles, 'allJsTsFiles should be exported');
    assert.ok(exports.commonIgnores, 'commonIgnores should be exported');
    assert.ok(exports.nextIgnores, 'nextIgnores should be exported');
  });
});

test('ESLint Config - Structure Validation', async (t) => {
  const configs = [
    { name: 'base', config: base },
    { name: 'typescript', config: typescript },
    { name: 'prettier', config: prettier },
    { name: 'recommended', config: exports.recommended },
    { name: 'nextjs', config: exports.nextjs },
  ];

  for (const { name, config } of configs) {
    await t.test(`${name} should be an array of objects`, () => {
      assert.ok(Array.isArray(config), `${name} should be an array`);
      assert.ok(config.length > 0, `${name} should not be empty`);
      config.forEach((c, i) => {
        assert.strictEqual(typeof c, 'object', `${name}[${i}] should be an object`);
        assert.notStrictEqual(c, null, `${name}[${i}] should not be null`);
      });
    });
  }
});

test('ESLint Config - Next.js Logic', async (t) => {
  await t.test('should handle missing Next.js plugin gracefully', async () => {
    // We already have the logic in next.mjs to check this env var
    process.env.ESLINT_CONFIG_FORCE_MISSING_NEXT = 'true';

    // We need to re-import or use a fresh copy if it was already loaded
    // Since it's an ESM module and top-level await is used, we might need a dynamic import with a cache buster if possible,
    // but for unit tests we can just check the behavior if we haven't loaded it yet or if we can isolate it.
    // However, since we are using `import * as exports`, it's already loaded.

    // For a true unit test of the fallback logic, we'd want to isolate the import.
    const { next: nextMissing } = await import(`../src/next.mjs?update=${Date.now()}`);

    assert.ok(Array.isArray(nextMissing), 'next (missing) should be an array');
    const hasErrorRule = nextMissing.some(
      (c) =>
        c.rules &&
        c.rules['no-restricted-syntax'] &&
        Array.isArray(c.rules['no-restricted-syntax']) &&
        c.rules['no-restricted-syntax'][1]?.message?.includes('Next.js ESLint configuration was requested'),
    );
    assert.ok(hasErrorRule, 'next (missing) should contain the diagnostic error rule');

    delete process.env.ESLINT_CONFIG_FORCE_MISSING_NEXT;
  });

  await t.test('should load Next.js plugin when present', async () => {
    const { next: nextPresent } = await import(`../src/next.mjs?update=${Date.now() + 1}`);
    assert.ok(Array.isArray(nextPresent), 'next (present) should be an array');

    // If running in an environment with the plugin, it should NOT have the error rule
    const hasErrorRule = nextPresent.some(
      (c) => c.rules && Object.keys(c.rules).some((r) => r.includes('Next.js ESLint configuration was requested')),
    );

    // In this dev environment, it should be present.
    assert.strictEqual(hasErrorRule, false, 'next (present) should NOT contain the diagnostic error rule');
  });
});

test('ESLint Config - Rule Activation', async (t) => {
  await t.test('recommended preset should include prettier and typescript rules', () => {
    const recommended = exports.recommended;
    const rules = recommended.reduce((acc, c) => ({ ...acc, ...(c.rules || {}) }), {});

    assert.ok(rules['prettier/prettier'], 'prettier rule should be present');
    assert.ok(
      Object.keys(rules).some((r) => r.startsWith('@typescript-eslint/')),
      'typescript rules should be present',
    );
  });
});

test('ESLint Config - Common Ignores', async (t) => {
  await t.test('base config should include commonIgnores', () => {
    const ignoreConfig = base.find((c) => c.ignores);
    assert.ok(ignoreConfig, 'base config should have an ignore block');
    assert.deepStrictEqual(ignoreConfig.ignores, exports.commonIgnores, 'base ignores should match commonIgnores');
  });
});
