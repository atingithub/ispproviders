'use strict';

angular.
  module('ispApp').
	config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/isps', {
          template: '<isp-list></isp-list><isp-detail></isp-detail>'
        }).
        when('/isps/:ispId', {
          template: '<isp-list></isp-list><isp-detail></isp-detail>'
        }).
        otherwise('/isps');
    }
  ]);