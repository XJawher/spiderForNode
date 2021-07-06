module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 注释这里的代码，防止出现 import 错误，因为 vtsconfig.json 中的 "module": "commonjs",
    // project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',

    // 'plugin:prettier/recommended',  prettier 的错误麻烦的很，这里就直接注释了
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // "linebreak-style": ["warn", "unix"],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
