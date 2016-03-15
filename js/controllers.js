angular.module('starter.controllers', [])

.controller('JogarCtrl', function ($scope, $ionicModal, MAXIMO_ERRO) {
	var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var palavras = ['congresso','lula','dilma','federal','corrupção','presos', 'brasil', 'manifestação'];

	$scope.teclado = [];
	$scope.palavra = [];
	$scope.palavra_certa = '';
	$scope.erro = 0;
	$scope.acerto = 0;
	$scope.MAXIMO_ERRO = MAXIMO_ERRO;

	$scope.carregar = function () {
		$scope.erro = 0;
		$scope.acerto = 0;

		$scope.teclado = [];
		for(var i = 0; i < letras.length; i++) {
			$scope.teclado.push({
				texto: letras[i],
				selecionada: false
			});
		}
		var numero = Math.floor(Math.random() * palavras.length);
		var palavra = palavras[numero];
		$scope.palavra_certa = palavra;

		$scope.palavra = [];
		for(var i = 0; i < palavra.length; i++) {
			$scope.palavra.push({
				texto: palavra[i],
				exibir: false
			});
		}
	};
	$scope.carregar();

	$scope.selecionar = function (letra) {
		if(!letra.selecionada && $scope.erro != MAXIMO_ERRO && $scope.acerto != $scope.palavra.length) {
			letra.selecionada = true;
			var encontrou = false;
			for(var i = 0; i < $scope.palavra.length; i++) {
				if(removerAcento($scope.palavra[i].texto) == letra.texto) {
					$scope.palavra[i].exibir = true;
					$scope.acerto++;
					var encontrou = true;
				}
			}
			if(!encontrou) {
				$scope.erro++;
			}
			if($scope.erro == MAXIMO_ERRO) {
				$scope.perdeu.show();
			}
			if($scope.acerto == $scope.palavra.length) {
				$scope.ganhou.show();
			}
		}
	};

	function removerAcento(letra) {
		letra = letra.replace(/[áãâ]/,'a');
		letra = letra.replace(/[éê]/,'e');
		letra = letra.replace(/[í]/,'i');
		letra = letra.replace(/[óõô]/,'o');
		letra = letra.replace(/[ú]/,'u');
		letra = letra.replace(/[ç]/,'c');
		return letra;
	}

	$ionicModal.fromTemplateUrl('tpl/ganhou.html', {
		scope: $scope
	}).then(function (modal) {
		$scope.ganhou = modal;
	});

	$ionicModal.fromTemplateUrl('tpl/perdeu.html', {
		scope: $scope
	}).then(function (modal) {
		$scope.perdeu = modal;
	});
});