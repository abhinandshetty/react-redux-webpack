const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry : "./src/Index.jsx",
    output: {
        filename: 'bundle.js'
    },
    devtool: 'eval-cheap-module-source-map',
    resolve: {
      extensions: [".jsx", ".js","scss"]
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            },
            {
              test: /\.(s[ac]ss|css)$/i,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.ejs",
          filename: "./index.html",
          title: 'DEV - React + Redux with Webpack'
        })
      ]
}