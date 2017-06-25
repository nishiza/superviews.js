// Karma configuration
// Generated on Tue Jun 20 2017 07:57:21 GMT+0900 (東京 (標準時))

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // plugins: ['karma-mocha', 'karma-chrome-launcher', 'karma-webpack', 'karma-sourcemap-loader', 'karma-coverage-istanbul-reporter'],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test/Karma/*Spec.js', watched: false}
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.js': ['webpack', 'sourcemap'],
      'test/**/*Spec.js': ['webpack', 'sourcemap'],
      '**/*.js': 'webpack'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

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
    // browsers: ['Chrome_Headless'],

    customLaunchers: {
      Chrome_Headless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    },

    customContextFile: 'test/karma/context.html',

    customDebugFile: 'test/karma/debug.html',

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
       { type: 'text' },
       { type: 'text-summary' },
       { type: 'lcovonly' }
      ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /index\.js/,
            exclude: /(test|node_modules)/,
            loader: 'istanbul-instrumenter-loader'
          }
        ]
      },
      resolve: {
        alias: {
          'mocha': 'mocha/mocha.js'
        }
        // mainFields: ['main']
      }
    }
  })
}
