module.exports = {
  "plugins": [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-react-jsx"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    "@babel/preset-react"
  ],
  "comments": false,
}