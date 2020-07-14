const path = require("path")
const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')
const {VueLoaderPlugin} = require("vue-loader")

module.exports = {
  entry: './main.js',
  output:{
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve:{
    extensions:[".js",".css",".vue"],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module:{
    rules:[
        {test:/\.css$/,loader:"style-loader!css-loader"},
        {test:/\.vue$/,loader:"vue-loader"},
        {test:/\.(jpg|png|jpeg|gif|ttf)$/,loader:"url-loader"}
    ]
  },
  plugins: [
  	new VueLoaderPlugin(),
    new MonacoEditorPlugin({
      // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      // Include a subset of languages support
      // Some language extensions like typescript are so huge that may impact build performance
      // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
      // Languages are loaded on demand at runtime
      languages: ['javascript', 'typescript']
    })
  ]
};
