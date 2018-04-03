$(function(){

	sorrisoBeemo();

	setTimeout(saudacao, 2500);

	paraBotao();

});



function sorrisoBeemo()
{

	setTimeout(function(){
		$(".BeemoLabioSuperior").css("top", '-61%');
	}, 1500);

}



function saudacao()
{
	$(".BeemoBoca").fadeOut(50);  
	$(".BeemoOlhos").fadeOut(); 
	$(".BeemoFace").addClass('BeemoFaceDigitando');
	$(".texto").addClass('textoAlinhado');

	var textoSaudacao = 'Ola amiguinho!';

	var h1 = $('<h1 class="mensagemDoBeemo">');

	setTimeout(digitacao(textoSaudacao, h1), 3000);

	$(".mensagemDoBeemo").css('padding-left', '3.3em');


	setTimeout(function()
	{
		$('.buttonChat').fadeIn();
		$(".buttonChat").css('animation', 'quicaBotao 1s ease-out 3');
	}, 2000);

}

function digitacao(mensagem, paragrafo)
{
	n = 0; // número incrementado
	t = ""; // letra incrementada
	v = 100; // velocidade do texto
	var campo = $(".texto");
	var texto = mensagem;
	var p = paragrafo;
	campo.append(p);

	function alerta() {
		t+=texto.charAt(n);
		if(n > texto.length) {
			return false;
		}
		setTimeout(function() {
			alerta();
		}, v);

		p.text(t);

		n++;
	}

	setTimeout(function() {
		alerta();
	}, v);
}

function paraBotao()
{
	$('.buttonChat').one('mouseenter', function()
	{	
		$(this).css('bottom', '6.7%');
		$(this).css('animation', 'none');
	});
}

function enviaMensagem()
{	
	$(".texto").removeClass('textoAlinhado');
	$(".texto").find('h1').css('padding-left', '1.5em');

	var p = $("<p class='mensagemEnviada' id='mensagemEnviada'>");

	var mensagem = $(".InputTexto").val();
	

	digitacao(mensagem,p);

	verificaMensagem(mensagem);

	verificaTela();

}

function verificaTela()
{
	var quantidade = document.getElementById("texto").children.length;

	if(quantidade > 1)
	{
		abaixaTela()    
	}

}
function abaixaTela()
{
	var setaBaixo = $(".setaBaixo");
	var contadorClick = 0;

	setaBaixo.on('click', function()
	{
		var c = document.getElementById("texto").children;

		$("#mensagemEnviada").css('color', '#17f588');
		$("#mensagemEnviada").css('background', 'transparent');

		$(".mensagemDoBeemo").css('color', '#17f588');
		$(".mensagemDoBeemo").css('background', 'transparent');

		c[contadorClick].style.color = "#1d3934";
		c[contadorClick].style.backgroundColor = "#17f588";

		contadorClick++;
		console.log(contadorClick);
	});
}