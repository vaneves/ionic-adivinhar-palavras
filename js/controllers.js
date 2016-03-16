angular.module('starter.controllers', [])

.controller('JogarCtrl', function ($scope, $ionicModal, Forca, MAXIMO_ERRO) {
    
    $scope.teclado = [];
    $scope.palavra = [];
    $scope.palavra_certa = '';
    $scope.erro = 0;
    $scope.acerto = 0;
    $scope.MAXIMO_ERRO = MAXIMO_ERRO;

    $scope.carregar = function () {
        $scope.erro = 0;
        $scope.acerto = 0;

        $scope.teclado = Forca.getTeclado();
        $scope.palavra = Forca.getPalavra();
    };
    $scope.carregar();

    $scope.selecionar = function (letra) {
        if(!letra.selecionada && $scope.erro != MAXIMO_ERRO && $scope.acerto != $scope.palavra.length) {
            letra.selecionada = true;
            var cont = Forca.selecionar(letra);
            if(cont > 0) {
                $scope.acerto += cont;
            } else {
                $scope.erro++;
            }
            if($scope.erro == MAXIMO_ERRO) {
                $scope.titulo = 'Game Over!';
                $scope.mensagem = 'Você perdeu! A palavra era';
                $scope.acabou.show();
            }
            if($scope.acerto == $scope.palavra.length) {
                $scope.titulo = 'Você Ganhou!';
                $scope.mensagem = 'Parabéns, acertou a palavra ';
                $scope.acabou.show();
            }
        }
    };

    $ionicModal.fromTemplateUrl('tpl/acabou.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.acabou = modal;
    });

    $scope.close = function () {
        $scope.acabou.hide();
    }
});