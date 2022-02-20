module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"],
    "linebreak-style": "off",
  },
    'indent': ['error', 'tab'],
};
