angular.
  module('ispApp').
  component('ispList', {
    templateUrl: 'isp-list/isp-list.template.html',
    controller: ['Isp',
      function IspListController(Isp) {
        this.isps = Isp.query();
        this.orderProp = 'age';
      }
    ]
  });