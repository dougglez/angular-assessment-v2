angular.module('assessment')
  .service('mainService', function($http) {

    this.getPets = function() {
      return $http.get('http://practiceapi.devmounta.in/pets')
        .then(response => {
          let results = response.data;
          return results;
        });
    };

    this.getOne = function(id) {
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/pets/' + id
      })
        .then(response => {
          let results = response.data;
          return results;
        });
    };
  });
