angular.module('assessment')
  .directive('petsDir', function() {
    return {
        restrict: 'EA',
        scope: {
          pet: '='
        },
        controller: 'mainCtrl',
        templateUrl: 'views/pet-tmpl.html'
    };
  });
