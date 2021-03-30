const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

const HTMLwebpackplugin = require("html-webpack-plugin");
const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  },
];
module.exports = {
  devtool: "eval-source-map",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "./build"),
  },
  module: { rules },
  plugins: [
    new HTMLwebpackplugin({
      template: "./public/index.html",
    }),
    new ESLintPlugin(),
    new PrettierPlugin(),
  ],
};
