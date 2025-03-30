# ESLint / Prettier / TypeScript Config

## Install

```bash
npm install --save-dev @okatechnology/eslint-config
```

## Usage

### Config ESLint

create `eslint.config.js` at your project root.

| Project Type | Exported Config Name | Config File Path   |
| ------------ | ------------------- | --------------- |
| React | `eslintConfigReact` | `eslintConfig/eslint.config.react.js` |
| React Native | `eslintConfigReactNative` | `eslintConfig/eslint.config.reactNative.js` |
| Expo | `eslintConfigReactNativeExpo` | `eslintConfig/eslint.config.reactNativeExpo.js` |
| Next.js | `eslintConfigReactNext` | `eslintConfig/eslint.config.reactNext.js` |
| Node.js | `eslintConfigNode` | `eslintConfig/eslint.config.node.js` |

If you want to config eslint for React project, write the following.

```javascript:.eslint.config.js
import { eslintConfigReact } from '@okatechnology/eslint-config/eslintConfig/eslint.config.react.js';

export default [
  ...eslintConfigReact,
  /* your config */
];
```

### Config Prettier

create `.prettierrc.js` at your project root and write the following.

```javascript:.prettierrc.js
module.exports = {
  ...require('@okatechnology/eslint-config/prettierrc/prettierrc'),
}
```

### Config TypeScript

create `tsconfig.json` at your project root.

| Project Type | Config File Path |
| ------------ | --------------- |
| React / Next.js | `tsconfig/tsconfig.react.json` |
| React Native / Expo | `tsconfig/tsconfig.react-native.json` |
| Node.js | `tsconfig/tsconfig.node.json` |

If you want to config tsconfig for React project, write the following.

```json:tsconfig.json
{
  "extends": "@okatechnology/eslint-config/tsconfig/tsconfig.react.json",
  /* your config */
}
```
