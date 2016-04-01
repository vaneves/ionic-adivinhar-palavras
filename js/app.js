angular.module('starter', ['ionic', 'starter.controllers', 'starter.factories'])

.constant('MAXIMO_ERRO', 5)

.value('PALAVRAS', [
    'sapo',
    'cachorro',
    'gato',
    'tartaruga',
    'cobra',
    'cavalo',
    'elefante',
    'coelho',
    'girafa',
    'vaca',
    'zebra',
    'abelha',
    'formiga',
    'tigre',
    'leopardo',
    'leão',
    'panda',
    'galinha',
    'ovelha',
    'rato',
    'pato',
    'ganso',
    'avestruz',
    'cabra',
    'camaleão',
    'calango',
    'lagarto',
    'barata',
    'cágado',
    'coala',
    'canguru',
    'capivara',
    'gambá',
    'tatu',
    'paca',
    'porco',
    'lobo',
    'macaco',
    'javali',
    'gavião',
    'jacaré',
    'paca',
    'pombo',
    'peru',
    'urso',
    'urubu',
    'tucano',
    'lula',
    'polvo',
    'pavão',
    'jararaca',
    'lagartixa',
    'jabuti',
    'golfinho',
    'gorila',
    'esquilo',
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