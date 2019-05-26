module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:prettier/recommended'],
  settings: {
    'import/core-modules': ['gatsby'],
  },
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
