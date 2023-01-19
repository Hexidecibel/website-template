/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  let mode = argv.mode || "development";
  return {
    mode: mode,
    devtool: mode === "production" ? false : "source-map",
    entry: {
      boot: path.resolve(__dirname, "src/main/web/Boot.tsx"),
      hot: "react-hot-loader/patch",
    },
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "src/main/web/target/classes/web"),
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[contenthash].chunk.js",
    },
    stats: {
      hash: false,
      assets: false,
      children: false,
      entrypoints: false,
      builtAt: true,
    },
    module: {
      rules: (mode === "production"
        ? [
            {
              enforce: "pre",
              test: /\.(jsx?|tsx?)$/,
              loader: "eslint-loader",
              exclude: /node_modules/,
              options: {
                fix: true,
                emitError: true,
                emitWarning: false,
                failOnWarning: false,
              },
            },
          ]
        : []
      ).concat([
        {
          test: /\.([jt])sx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|eot|woff|ttf|svg|woff2|ico)$/,
          loader: "file-loader",
        },
      ]),
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            },
          },
        },
      },
    },
    resolve: {
      alias: { "react-dom": "@hot-loader/react-dom" },
      extensions: [".tsx", ".ts", ".js"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        favicon: "./src/main/web/favicon.ico",
        template: path.resolve(__dirname, "./src/main/web/index.html"),
      }),
      new MiniCssExtractPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new (require("clean-terminal-webpack-plugin"))(),
    ].concat(
      mode === "production"
        ? [
            new (require("compression-webpack-plugin"))(),
            new (require("clean-webpack-plugin").CleanWebpackPlugin)(),
          ]
        : []
    ),
  };
};
