const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:['./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/bundle.js'
    },

    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    { loader:'css-loader'},
                    { loader:'sass-loader'}
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|jpg)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'img'
                    }
                }
            },
            {
                test:/\.html$/,
                use:'html-loader' 
            },
        ]
    },

    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/style.css'
        })
    ]
};