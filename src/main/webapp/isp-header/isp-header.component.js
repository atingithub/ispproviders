angular.
  module('ispApp').
  component('ispHeader', {
    templateUrl: 'isp-header/isp-header.template.html',
    controller: ['Isp', 'Data',
      function IspHeaderController(Isp, Data) {
        this.totalIsp = Data.getTotalIsp();
				console.log(this.totalIsp);
      }
    ]
  });