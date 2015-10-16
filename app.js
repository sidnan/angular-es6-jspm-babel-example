'use strict';
import 'angular';
import 'angular-route';
import 'src/view1/view1.js';
import 'src/view2/view2.js';
import {OneDirective} from 'src/components/one/one.js';



// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2'
]);

myApp.directive('one', OneDirective.directiveFactory);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
