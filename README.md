# angular-es6-jspm-babel-example

This is a simple example of using [Angular 1.x](https://angularjs.org/) with [ES6](http://www.ecma-international.org/ecma-262/6.0/) syntax and compiling it all into a bundle using [JSPM](http://jspm.io/), [SystemJS](https://github.com/systemjs/systemjs) and [Babel](https://babeljs.io/), and workflow using [Gulp](http://gulpjs.com/).


## Install dependencies

```
npm install

jspm install
```



## Steps to run this project
1. ```npm install```
2. ```jspm install```
3. ```gulp```
4. To view the page that used SFX javascript bundle - ```http://localhost:8080/index.html```
5. To view the page that used javascript loaded async - ```http://localhost:8080/index-async.html```
6. To test this project ```npm run test``` OR ```karma start karma.config.js```



## Steps to create similar new project
1. ```npm init```
2. ```npm install --save-dev jspm live-server phantomjs jasmine jasmine-core karma karma-jasmine karma-phantomjs-launcher karma-jspm karma-babel-preprocessor istanbul karma-coverage isparta karma-sourcemap-loader```
3. ```jspm init``` (note: select babel during the setup, name config file as jspm.config.js)
4. ```jspm install npm:angular@^1.4.7 npm:angular-route@^1.4.7```
5. Now configure your karma.conf.js file using [this guide](http://karma-runner.github.io/0.12/intro/configuration.html)
6. To generate karma conf file - ```karma init karma.config.js```




## Notes
1. When you create a directive, make sure to use the ES6 syntax. Also make sure to create a directive factory to create an instance of the directive to register in the angular app module. As follows:
Directive factory which create an instance
```
static directiveFactory($q){
        OneDirective.instance = new OneDirective($q);
        return OneDirective.instance;
    }
```
Directive factory is invoked to register the directive
```
var myApp = angular.module('myApp', [
	...
]);

myApp.directive('one', OneDirective.directiveFactory);

```

