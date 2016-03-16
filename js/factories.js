angular.module('starter.factories', [])

.factory('Forca', function (PALAVRAS) {
    var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var forca = {};
    var palavra_formatada = [];
    
    forca.getTeclado = function () {
        var teclado = [];
        for(var i = 0; i < letras.length; i++) {
            teclado.push({
                texto: letras[i],
                selecionada: false
            });
        }
        return teclado;
    };
    forca.getPalavra = function () {
        var numero = Math.floor(Math.random() * PALAVRAS.length);
        return PALAVRAS[numero];
    };
    forca.formatar = function (palavra) {
        palavra_formatada = [];
        for(var i = 0; i < palavra.length; i++) {
            palavra_formatada.push({
                texto: palavra[i],
                exibir: false
            });
        }
        return palavra_formatada;
    };
    forca.selecionar = function (letra) {
        var cont = 0;
        for(var i = 0; i < palavra_formatada.length; i++) {
            if(removerAcento(palavra_formatada[i].texto) == letra.texto) {
                palavra_formatada[i].exibir = true;
                cont++;
            }
        }
        return cont;
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
    return forca;
});