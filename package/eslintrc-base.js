module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint-config-prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    curly: ['warn', 'multi-line'],
    'no-console': 'warn',
    'no-undef': 'off',
    'no-restricted-imports': ['warn', { patterns: ['../', './'] }],
    'prefer-template': 'error',
    'array-callback-return': ['error', { checkForEach: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'never',
        prev: ['expression', 'block-like', 'singleline-const'],
        next: ['expression', 'block-like', 'singleline-const'],
      },
      {
        blankLine: 'always',
        prev: ['multiline-expression', 'multiline-block-like'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['multiline-expression', 'multiline-block-like'],
      },
      {
        blankLine: 'any',
        prev: ['interface', 'type', 'export'],
        next: ['interface', 'type', 'export'],
      },
    ],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
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
    'unused-imports/no-unused-imports-ts': 'warn',
  },
};
