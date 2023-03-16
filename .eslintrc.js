module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    camelcase: 'off',
  }
}
