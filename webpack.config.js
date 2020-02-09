const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/scripts/app.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html'),
            server._watch('./app/**/*.css'),
            server._watch('./app/**/*.scss'),
            server._watch('./app/**/*.js')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',

    module: {
        rules: [
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
          
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    {
                        // After all CSS loaders we use plugin to do his work.
                        // It gets all transformed CSS and extracts it into separate
                        // single bundled file
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        // This loader resolves url() and @imports inside CSS
                        loader: "css-loader?url=false",
                    },
                    {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: "postcss-loader"
                    },
                    {
                        // First we transform SASS to standard CSS
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "bundled.css"
        })
      
    ]
}