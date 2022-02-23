if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    uploadController: path.resolve(
      __dirname,
      "client/src/js/uploadController.js"
    ),

    viewController: path.resolve(__dirname, "client/src/js/viewController.js"),
  },

  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "[name].bundle.js",
    clean: true,
  },

  devServer: {
    static: "./dist",
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/public/views/uploadPage.html"),
      filename: "upload.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/public/views/viewPage.html"),
      filename: "view.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/public/views/login.html"),
      filename: "login.html",
      inject: false,
    }),
  ],
};
