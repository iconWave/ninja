const currentEnv = process.env.NODE_ENV || 'production';

console.log(process.env)

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "globals": {
    "$": true,
    "process": true,
    "dirname": true
  },
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true
    },
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": currentEnv === 'development' ? 0 : 2,
    "no-debugger": currentEnv === 'development' ? 0 : 2,
    "no-alert": currentEnv === 'development' ? 0 : 2,
    "no-unused-vars": 0,
    "no-constant-condition": 0,
    "no-fallthrough": 0,
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": 2,
    "no-unexpected-multiline": 0,
    "no-class-assign": 2,
    "no-empty": ["error", { "allowEmptyCatch": true }]
  }
};