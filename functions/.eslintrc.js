module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '/generated/**/*', // Ignore generated files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/no-unresolved': 0,
    'max-len': 0,
    'quote-props': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-unused-vars': 0,
    'object-curly-spacing': 0,
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'], // Enforce consistent semicolons
  },
};
