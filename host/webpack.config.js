const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
   output: {
      publicPath: "http://localhost:8080/",
   },

   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
   },

   devServer: {
      port: 8080,
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
         name: "host",
         filename: "remoteEntry.js",
         remotes: {
            first_app: "first_app@http://localhost:8081/remoteEntry.js",
            second_app: "second_app@http://localhost:8082/remoteEntry.js",
            shared: "shared@http://localhost:8083/remoteEntry.js",
         },
         exposes: {},
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
            axios: {
               singleton: true,
            },
         },
      }),
      new HtmlWebPackPlugin({
         template: "./src/index.html",
      }),
   ],
};
