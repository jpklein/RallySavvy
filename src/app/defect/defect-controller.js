angular.module('rallySavvy.defect')
.controller('DefectCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    'use strict';
    $scope.defectId = $routeParams.defectId;

    var restApi = new RestApi({
      user: 'username', //required if no api key, defaults to process.env.RALLY_USERNAME
      pass: 'password', //required if no api key, defaults to process.env.RALLY_PASSWORD
      // apiKey: '_12fj83fjk...', //preferred, required if no user/pass, defaults to process.env.RALLY_API_KEY
      apiVersion: 'v2.0', //this is the default and may be omitted
      server: 'https://rally1.rallydev.com',  //this is the default and may be omitted
      requestOptions: {
        headers: {
          //while optional, it's good practice to provide header information
          'X-RallyIntegrationName': 'My cool node.js program',
          'X-RallyIntegrationVendor': 'My company',
          'X-RallyIntegrationVersion': '1.0'
        }
          //any additional request options (proxy options, timeouts, etc.)     
      }
    });

    restApi.get({
      //may be a ref ('/defect/1234') or an object with a _ref property
      ref: '/defect/' + $routeParams.defectId, 
      fetch: ['FormattedID', 'Name'], //fields to fetch
      // scope: {
      //     workspace: '/workspace/12345' //optional, only required if creating in non-default workspace
      // },
      // requestOptions: {} //optional additional options to pass through to request
    }).then(function(result) {
        $scope.$apply(function() {
          $scope.defectId = "Success!";
          $scope.defect = result.Object;
        });
        console.log(result.Object);
    }, function(errors) {
        console.log(errors);
    });
  }
]);