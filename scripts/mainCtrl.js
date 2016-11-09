angular.module('assessment')
  .controller('mainCtrl', ($scope, mainService, $location, $stateParams) => {

    $scope.getPets = () => {
      mainService.getPets().then(results => {
        $scope.pets = results;
      });
    };
    $scope.getPets();
  });
