module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', 200],
    'react/function-component-definition': 'off',
    'import/no-import-module-exports': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'guard-for-in': 'off',
    'no-alert': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-globals': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'func-names': 'off',
    'import/no-dynamic-require': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-relative-packages': 'off',
    'no-prototype-builtins': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'prefer-destructuring': 'off',
    'no-shadow': 'off',
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
};
