// NOTE: eslint-plugin-expoがFlatConfigを持っていないため固有の設定は後回し

import { eslintConfigReactNative } from './eslint.config.reactNative.js';

/** @public */
export const eslintConfigReactNativeExpo = [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...eslintConfigReactNative,
];
