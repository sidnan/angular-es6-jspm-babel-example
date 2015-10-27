/* global module */
module.exports = function (config) {
	'use strict';
	config.set({
		autoWatch: true,
		singleRun: true,

		/* jspm is needed for code logic
		 * - module dependency
		 * - babel transpiler
		 */
		frameworks: ['jspm', 'jasmine'],

		files: [
			'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
		],

		jspm: {
			config: 'jspm.config.js',
			packages: 'jspm_packages',
			loadFiles: [
				'src/app.js', 'src/**/*.test.js'
			],
			serveFiles: [
				// all the files other than the test logic
				'src/**/!(*.test).js'
			]
		},

		proxies: {
      '/src/': '/base/src/',
      '/jspm_packages/': '/base/jspm_packages/',
			'/node_modules/': '/base/node_modules/'
		},

		browsers: ['PhantomJS'],

		// the ES5+ test code must be transpiled
		preprocessors: {
			'src/**/!(*.test).js': ['babel', 'coverage']
		},

		babelPreprocessor: {
			options: {
				stage: 1,
				sourceMap: 'inline'
			}
		},

		reporters: ['coverage', 'progress'],

		coverageReporter: {
			instrumenters: {isparta: require('isparta')},
			instrumenter: {
				'src/**/*.js': 'isparta'
			},

			reporters: [
				{
					type: 'text-summary',
					subdir: normalizationBrowserName
				},
				{
					type: 'html',
					dir: 'coverage/',
					subdir: normalizationBrowserName
				}
			]
		}
	});

	function normalizationBrowserName(browser) {
		return browser.toLowerCase().split(/[ /-]/)[0];
	}
};
