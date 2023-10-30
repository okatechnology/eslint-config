module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './eslintrc-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react/no-children-prop': 'off',
    'react/jsx-boolean-value': ['warn', 'always'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/media-has-caption': 'off',
  },
};
