$(function(){

	sorrisoBeemo();

	setTimeout(saudacao, 2500);

	paraBotao();

	enviaMensagem();

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

	setTimeout(digitacao(textoSaudacao), 3000);

	setTimeout(function()
	{
		$('.botaoAbreForm').fadeIn();
		$(".botaoAbreForm").css('animation', 'quicaBotao 1.2s ease-out 3');
	}, 2000);

}

function digitacao(mensagem)
{
	n = 0; // número incrementado
	t = ""; // letra incrementada
	v = 100; // velocidade do texto
	var texto = mensagem;
	function alerta() {
		t+=texto.charAt(n);
		if(n > texto.length) {
			return false;
		}
		setTimeout(function() {
			alerta();
		}, v);
		$('.texto').html(t);
		n++;
	}

	setTimeout(function() {
		alerta();
	}, v);
}

function paraBotao()
{
	$('.botaoAbreForm').on('click', function()
	{	
		$(this).css('bottom', '3.5%');
		$(this).css('animation', 'none');
		abreChat();
	});
}

function abreChat()
{
	setTimeout(function()
	{
		$(".faleForm").toggle();

	}, 200);
}

function enviaMensagem()
{
	var mensagem = $(".faleForm").find('input').val();
	var btnEnviar = $(".faleForm").find('span');
	var corpoDoTexto = $(".texto");

	btnEnviar.on('click', function()
	{
		var mensagemAEnviar = innerHTML('<p>'+mensagem+'</p>');
		corpoDoTexto.append(mensagemAEnviar);
	});
}