angular.
  module('core.isp').
  factory('Isp', ['$resource',
    function($resource) {
      return $resource('isps/:ispId.json', {}, {
        query: {
          method: 'GET',
          params: {ispId: 'isps'},
          isArray: true
        }
      });
    }
  ]);