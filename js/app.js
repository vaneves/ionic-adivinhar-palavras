angular.module('starter', ['ionic', 'starter.controllers', 'starter.factories'])

.constant('MAXIMO_ERRO', 6)

.value('PALAVRAS', [
    'congresso',
    'lula',
    'dilma',
    'federal',
    'corrupção',
    'presos',
    'brasil',
    'manifestação'
])

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