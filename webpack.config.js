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

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },

  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "[name].bundle.js",
  },

  // // Loaders
  // module: {
  //   rules: [
  //     { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
  //   ],
  // },

  // Plugins
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, "client/public/views/uploadPage.html"),
  //     title: "Report App",
  //     filename: "uploadPage.html",
  //     inject: false,
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, "client/public/views/viewPage.html"),
  //     title: "Report App",
  //     filename: "viewPage.html",
  //     inject: false,
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, "client/public/views/login.html"),
  //     title: "Report App",
  //     filename: "login.html",
  //     inject: false,
  //     chunks: ["login"],
  //   }),
  // ],
};
