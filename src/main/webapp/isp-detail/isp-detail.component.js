'use strict';

// 
angular.
  module('ispApp').
  component('ispDetail', {
    templateUrl: 'isp-detail/isp-detail.template.html',
    controller: ['$routeParams', 'Isp',
      function IspDetailController($routeParams, Isp) {
        var self = this;
        
				self.isp = Isp.get({ispId: $routeParams.ispId}, function(isp) {
          //self.setImage(isp.image[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
				
      }
    ]
  });