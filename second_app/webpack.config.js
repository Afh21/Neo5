const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
   output: {
      publicPath: "http://localhost:8082/",
   },

   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
   },

   devServer: {
      port: 8082,
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
      ],
   },

   plugins: [
      new ModuleFederationPlugin({
         name: "second_app",
         filename: "remoteEntry.js",
         remotes: {
            shared: "shared@http://localhost:8083/remoteEntry.js",
         },
         exposes: {
            "./second_app": "./src/App",
         },
         shared: {
            ...deps,
            react: {
               singleton: true,
               requiredVersion: deps.react,
            },
            "react-dom": {
               singleton: true,
               requiredVersion: deps["react-dom"],
            },
         },
      }),
      new HtmlWebPackPlugin({
         template: "./src/index.html",
      }),
   ],
};