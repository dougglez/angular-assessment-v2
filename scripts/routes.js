angular.module('assessment')
  .config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html'
      })
      .state('pets', {
        url: '/pets',
        templateUrl: './views/pets.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      })
      .state('bio', {
        url: '/bio/:id',
        templateUrl: './views/pet-bio.html',
        controller: function($scope, $stateParams, mainService) {
          $scope.id = $stateParams.id;
          mainService.getOne($scope.id).then(function(results) {
            $scope.onePet = results;
          });
        }
      });
  });
