'use strict';

// 
angular.
  module('ispApp').
  component('ispDetail', {
    templateUrl: 'isp-detail/isp-detail.template.html',
    controller: ['$routeParams', 'Isp', 'Data',
      function IspDetailController($routeParams, Isp, Data) {
        var self = this;
        
				self.isp = Isp.get({ispId: $routeParams.ispId}, function(isp) {
					
        });
      }
    ]
  });