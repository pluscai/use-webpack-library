const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    externals: ["lodash"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "library.js",
        library: 'library',
        libraryTarget: 'umd'
    }
}

/**
 * 使用我们打包出的这个library.js的方法有很多种：
 * 1. ES Module: import library from 'library'
 * 2. cmd: const library = require('library');
 * 3. amd： require(['library'],function(){}) 
 * 
 * 上面3种引入方式配置  libraryTarget: 'umd' 可实现
 * 下面第4种引入方式 配置 library: 'library' 可实现
 * 
 * 4. 通过 <script src="library.js"></script> 引入后通过 library.math 使用库方法
 */
