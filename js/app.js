angular.module('starter', ['ionic', 'starter.controllers', 'starter.factories'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

    });
})

.constant('MAXIMO_ERRO', 5)

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('inicio', {
        url: '/inicio',
        templateUrl: 'tpl/inicio.html'
    })

    .state('jogar', {
        url: '/jogar',
        templateUrl: 'tpl/jogar.html',
        controller: 'JogarCtrl'
    });

    $urlRouterProvider.otherwise('/inicio');
});