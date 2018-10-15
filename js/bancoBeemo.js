$(function()
{




});

function banco()
{

	return {

		saudacoes :  [
		'Oi',
		'Olá',
		'Eai'	
		],

		saudacoes2 : [
		'Bem',
		'Vou bem',
		'Estou otimo',
		'Tudo certo',
		

		],

	}
}


function verificaMensagem(mensagem)
{
	var arrayMensagem = mensagem.split(' ');
	for (var j = arrayMensagem.length - 1; j >= 0; j--) {
		
		var array1 = banco().saudacoes;
		var array2 = banco().saudacoes2;

		for (var i = array1.length - 1; i >= 0; i--) {
			if(arrayMensagem[j].toLowerCase() == (array1[i].toLowerCase()) )
			{
				respondeSaudacao();
				break
			}
		}
		for (var i = array2.length - 1; i >= 0; i--) {
			if(arrayMensagem[j].toLowerCase() == (array2[i].toLowerCase()) )
			{
				respondeSaudacao2();
				break
			}
		}


	}

}


function respondeSaudacao()
{
	setTimeout(function()
	{
		var h1 = $("<p class='mensagemDoBeemo'>");

		var mensagem = 'Como vai voce?';

		digitacao(mensagem,h1);
		verificaTela();
	}, 2000);


}
function respondeSaudacao2()
{
	setTimeout(function()
	{
		var h1 = $("<p class='mensagemDoBeemo'>");

		var mensagem = 'Que bom, me sinto feliz.';

		digitacao(mensagem,h1);
		verificaTela();
	}, 2000);


}