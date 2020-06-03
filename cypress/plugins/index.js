module.exports = (on, config) => {
  config.env.webpackFilename = 'webpack.config.js'
  require('cypress-react-unit-test/plugins/load-webpack')(on, config)
  require('@cypress/code-coverage/task')(on, config)
  return config
}
