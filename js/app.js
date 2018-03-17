$(function(){

	sorrisoBeemo();

	setTimeout(saudacao, 2500);

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

	var textoSaudacao = 'Ola amiguinho!';

	setTimeout(digitacao(textoSaudacao), 3000);

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
