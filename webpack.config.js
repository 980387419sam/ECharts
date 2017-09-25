var webpack = require("webpack");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : __dirname+"/dist/",
        filename : "index.js"
    },
    module : {
        loaders : [
            {test : /\.js$/ , exclude : /node_modules/ , loader : "babel-loader?presets[]=es2015&presets[]=react"},
            {test : /\.css$/ , loader : "style-loader!css-loader"},
            {test : /\.less$/ , loader : "style-loader!css-loader!less-loader"},
            {test:/\.png|jpg$/,loader: "url-loader?limit=8192"}
        ] 
    },
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 3300,
        inline : true
    },
    plugins : [
        new webpack.ProvidePlugin({
            React : "react",
            rL : __dirname + "/src/rl.js"
        })
    ]
}