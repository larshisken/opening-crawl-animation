/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T19:31:31+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-31T19:14:35+02:00
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.WEBPACK_ENV;

const createConfig = (target, outputFile, plugins) => {
    return {
        entry: './js/index.js',
        output: {
            path: path.resolve(__dirname, `build/${target}`),
            filename: outputFile,
            libraryTarget: target,
            library: 'Oca'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }]
        },
        plugins: plugins,
        stats: {
            colors: true
        }
    }
};

const plugins = [];
let outputFile = "";

if (env === 'prod') {
    outputFile = 'oca.min.js';
    plugins.push(new UglifyJSPlugin());
} else {
    outputFile = 'oca.js';
}

module.exports = [
    createConfig('var', outputFile, plugins),
    createConfig('commonjs2', outputFile, plugins),
    createConfig('amd', outputFile, plugins),
    createConfig('umd', outputFile, plugins),
];
