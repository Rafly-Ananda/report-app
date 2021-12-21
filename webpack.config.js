const path = require("path");

module.exports = {
  entry: {
    uploadController: path.resolve(
      __dirname,
      "client/public/js/uploadController.js"
    ),
    viewController: path.resolve(
      __dirname,
      "client/public/js/viewController.js"
    ),
  },

  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "src/assets/images/[name].[ext]",
  },

  module: {
    rules: [
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
    ],
  },
};
