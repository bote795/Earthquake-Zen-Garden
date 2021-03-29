const path = require("path");
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
  ],
};
