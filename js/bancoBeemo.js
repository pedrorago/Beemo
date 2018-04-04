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
		'Tudo certo+-',

		],

	}
}


function verificaMensagem(mensagem)
{
	var arrayMensagem = mensagem.split(' ');
	for (var j = arrayMensagem.length - 1; j >= 0; j--) {
		
		var array = banco().saudacoes;

		for (var i = array.length - 1; i >= 0; i--) {
			if(arrayMensagem[j].toLowerCase() == (array[i].toLowerCase()) )
			{
				respondeSaudacao();
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
	}, 1000);


}