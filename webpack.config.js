const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    
    devServer: {
        historyApiFallback: true
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.(png|svg|jpg|gif)$/,  use: [ 'file-loader'] },

            {
                test: /\.scss$/,
                use: [
                    {
                      loader:  MiniCssExtractPlugin.loader 
                    },
                    {
                      loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                      loader: "sass-loader" // compiles Sass to CSS
                    }
                  ]
            },
            {
                test: /\.(zip)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                         //   name: '[path][name]-[hash:8].[ext]'
                         name: '[name].[ext]'
                        }
                    }
                ]
            }
            
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "index.css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};