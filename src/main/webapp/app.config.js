'use strict';

angular.
  module('ispApp').
	config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/isps/:ispId', {
          template: '<isp-detail></isp-detail>'
        }).
        otherwise('/isps');
    }
  ]);