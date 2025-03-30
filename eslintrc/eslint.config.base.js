import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
// eslint-disable-next-line import/no-unresolved
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
// eslint-disable-next-line import/no-unresolved
import importAccess from 'eslint-plugin-import-access/flat-config';
import pluginPromise from 'eslint-plugin-promise';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

/** @public */
export const eslintConfigBase = tseslint.config([
  eslint.configs.recommended,
  stylistic.configs.recommended,
  tseslint.configs.eslintRecommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  importPlugin.flatConfigs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  pluginPromise.configs['flat/recommended'],
  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },

      parser: typescriptEslintParser,
      ecmaVersion: 2024,
      sourceType: 'module',

      parserOptions: {
        project: true,
      },
    },

    plugins: {
      'unused-imports': unusedImports,
      'import-access': importAccess,
    },

    rules: {
      curly: ['warn', 'all'],
      'no-console': 'warn',
      'prefer-template': 'error',
      'no-useless-concat': 'error',

      'array-callback-return': [
        'error',
        {
          checkForEach: true,
        },
      ],

      eqeqeq: [
        'error',
        'always',
        {
          null: 'never',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowHigherOrderFunctions: false,
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        {
          allowHigherOrderFunctions: false,
        },
      ],

      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
        },
      ],

      'import/no-duplicates': 'warn',
      'import/newline-after-import': 'warn',

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'unused-imports/no-unused-imports': 'error',

      'import-access/jsdoc': [
        'error',
        {
          indexLoophole: false,
          filenameLoophole: true,
          defaultImportability: 'package',
        },
      ],
    },
  },
]);
