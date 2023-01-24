const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
   output: {
      publicPath: "http://localhost:8083/",
   },

   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
   },

   devServer: {
      port: 8083,
      historyApiFallback: true,
   },

   module: {
      rules: [
         {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
               fullySpecified: false,
            },
         },
         {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
         },
         {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/preset-react"] },
         },
      ],
   },

   plugins: [
      new ModuleFederationPlugin({
         name: "shared",
         filename: "remoteEntry.js",
         remotes: {},
         exposes: {
            "./CardList": "./src/components/CardList",
            "./IntlWrapper": "./src/components/IntlWrapper",
            "./IntlFormatterMessage":
               "./src/components/IntFormatterMessage.jsx",
            "./hooks": "./src/hooks/",
            "./translation": "./src/i18n/",
            "./ContextProvider": "./src/context/ContextProvider",
         },
         shared: ["react", "react-dom", "react-router-dom"],
      }),
      new HtmlWebPackPlugin({
         template: "./src/index.html",
      }),
   ],
};
