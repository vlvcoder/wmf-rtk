const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const dependencies = require("./package.json").dependencies;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'remoteApp',
            filename: "remoteEntry.js",
            exposes: {
                "./RemoteComponent": "./src/components/RemoteComponent.js",
                "./utils": "./src/utils/index.js",
                './remoteSlice': './src/store/slices/remoteSlice.js',
            },
            shared: {
                ...dependencies,
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
                "react-redux": {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies["react-redux"],
                },
                "@reduxjs/toolkit": {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies["@reduxjs/toolkit"],
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
};
