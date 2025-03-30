import { eslintConfigBase } from './eslint.config.base.js';

/** @public */
export const eslintConfigNode = [
  ...eslintConfigBase,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
