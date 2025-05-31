import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        parser: tsEslint.parser,
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['off', {argsIgnorePattern: '^_'}],
    },
  },
  {
    ignores: [
      ".yarn/**/*",
      "**/tsup.config.ts",
      "**/.esbuild",
      "**/.babelrc.js",
      "**/babel.config.js",
      "**/jest.config.*",
      "**/generated.ts",
      "**/.lintstagedrc.mjs",
      "**/*.json",
      "**/*.js",
      "**/*.d.ts",
      "**/dist",
      "**/output",
      "**/lib",
      "**/vite.config.mts",
      "**/vite.config.ts",
      "codemods/**/*",
    ],
  },
]; 