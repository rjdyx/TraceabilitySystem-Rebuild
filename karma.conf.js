// Karma configuration
// Generated on Wed Oct 25 2017 16:48:48 GMT+0800 (中国标准时间)
var webpack = require('webpack')
<<<<<<< HEAD
var webpackconfig = require('./build/webpack.base.config');
=======
var webpackConfig = require('./build/webpack.base.config.js')

>>>>>>> 8009cbd4ea3cb46b83214b0fc945f3098ca338b7
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js',
      '../node_modules/sinon/pkg/sinon.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/unit/**/*.spec.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: webpackconfig,
    coverageIstanbulReporter: {
        reports: ['text-summary', 'html'],
        fixWebpackSourcePaths: true
    },
<<<<<<< HEAD
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
    }
=======
    webpack: webpackConfig
>>>>>>> 8009cbd4ea3cb46b83214b0fc945f3098ca338b7
  })
}
