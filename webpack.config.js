const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
     
    mode : "development",
    entry  :  {
        index : {
            
            import  : "./src/react.index.js",
        dependOn : "shared"
        },
        shared: [ "@reduxjs/toolkit" ,"react"  , "react-redux"]
    } ,

    
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js',
      },
      plugins: [new HtmlWebpackPlugin({
          title : "Some Text Title", 
          template : "./src/index.html"
      }) //, new MiniCssExtractPlugin()
    ],
 
      devServer: {
        static: "./dist",
        compress: true,
        port: 9000,
        hot: true , 
      },
    module : {
        rules : [{
            test : /\.jsx?/,
            exclude : /node_modules/,
            use : ["babel-loader"]

        } ,
        {        test: /\.css$/i,        
                include: path.resolve(__dirname, 'src'),        
                use: ["style-loader", 'css-loader', 'postcss-loader'],      
            }

     ]
        
    },
    resolve :  {
        extensions : [".js",".jsx"], 
    },
    devtool : "eval-source-map",
    optimization: {

        splitChunks: {
   
          chunks: 'all',
   
        },
   
      },
   
}