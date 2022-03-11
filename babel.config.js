module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src'
          }
        }
      ]
    ],
    presets: ['babel-preset-expo']
  }
}
