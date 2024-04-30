const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/scripts/index",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./app/src/index.html", to: "index.html"},
      { from: "./app/src/list-item.html", to: "list-item.html"}
    ])
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true }
};
