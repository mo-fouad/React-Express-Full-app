// import path from 'path';

const path = require("path");


module.exports = {
    mode: 'development', // the Mode of our App
    entry: path.resolve(__dirname, 'src','app'), //  the starting point for our App inside the SRC/App Folder
    output: {
        path: path.resolve(__dirname,'dist'), // the out put for out bundled file
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.jsx'] // the extensions that we are looking for
    },
    devServer: {
        historyApiFallback: true // just to enable us to use React router
    },
    module: { // how do we want our app to be compiled
        rules: [{
            test: /\.jsx?/, // any file that has Js at the end or JSX in our project
            loader:'babel-loader' // use this loader with them
        }]
    }
};