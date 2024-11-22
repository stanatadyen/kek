const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = (env = {}) => ({
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/index.js"),

  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: "index.html" }),
    new ModuleFederationPlugin({
      name: "dummy",
      library: { name: "dummy", type: "umd" },
      exposes: {
        "./Gummy": "./src/pages/gummy.vue",
        "./ViewWrapper": "./src/wrapper.js",
      },
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
});
