
angular.module('rallySavvy', [
  'ngRoute',
  'rallySavvy.defect',
  'rally-savvy-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/defects/:defectId', {
      controller: 'DefectCtrl',
      templateUrl: '/rally-savvy/defect/defect-detail.html'
    })
    .otherwise({
      redirectTo: '/defects/18603203206'
    });
});
