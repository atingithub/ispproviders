angular.
  module('ispApp').
  component('ispList', {
    templateUrl: 'isp-list/isp-list.template.html',
    controller: ['Isp', 'Data', '$location',
      function IspListController(Isp, Data, $location) {
        this.isps = Isp.query();
									
				this.isps.$promise.then(function(data, $rootScope) {
					Data.setTotalIsp(data.length);
					
       		this.isp = Isp.get({ispId: data[0].id}, function(isp) {
						$location.path('/isps/' + data[0].id);
        	});
   			});
				
        this.orderProp = 'age';
				this.ordrByProp = 'price';
				
      }
    ]
  });