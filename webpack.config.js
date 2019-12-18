const path = require('path') //modulo path que viene nativo de node
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // Genera un nuevo html con configuraciones especificas
const webpack = require('webpack') // hot reloader plugin

// equivalente a export default
module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'), // Genera ruta dependiendo tu SO, dist es una convencion donde van los js compilados
        //filename: 'papu-bundle-[name].js'
        filename: 'bundle.js' // name corresponde a los nombres key de el objeto entry
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        disableHostCheck: true,   // That solved it
    },
    //aqui van los loaders
    module: { 
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',  // incluir babel
                exclude: /node_modules/ // excluye esa carpeta
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|otf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'] //incluir loaders de css
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() ,
        new HtmlWebpackPlugin({
            title: 'Hot-Reloader',
            template: path.resolve(__dirname,'src/index.html')
        })
    ]
}