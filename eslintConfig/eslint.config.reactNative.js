// NOTE: eslint-plugin-react-nativeがFlatConfigを持っていないため固有の設定は後回し
// 強くオンにしたいルールもないし

import { eslintConfigReact } from './eslint.config.react.js';

/** @public */
export const eslintConfigReactNative = [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...eslintConfigReact,
  {
    rules: {
      'jsx-a11y/no-autofocus': 'off',
    },
  },
];
