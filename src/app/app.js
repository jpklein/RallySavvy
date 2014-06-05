
angular.module('rallySavvy', [
  'ngRoute',
  'rallySavvy.todo',
  'rally-savvy-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/rally-savvy/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
