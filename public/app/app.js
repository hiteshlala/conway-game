angular.module('conway', [
  'ngRoute',
  'conway.home',
  'conway.start',
  "ui.bootstrap"
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/homeView.html',
      controller: 'HomeController'
    })
    .when('/start', {
      templateUrl: 'app/start/startView.html',
      controller: 'StartController'
    })
    .when('/start/:id', {
      templateUrl: 'app/start/startView.html',
      controller: 'StartController'
    });
});