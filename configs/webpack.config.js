const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports = {
  entry: path.resolve (__dirname, "../src/index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle[hash].js",
    chunkFilename: "[id].js",
    publicPath: ""
  },

  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },  

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(js|jsx)$/i, 
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-transform-runtime"]
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
      filename: "index.html",
      inject: "body"
    }),
    new CleanWebpackPlugin()
  ],
}
