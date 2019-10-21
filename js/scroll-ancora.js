$(".blog").on("click", function(event){

	// a animação vai ocorrer no html, body
	$('html, body').animate({

		// pega o atributo href do this (link que recebeu o click)
		// e faz a animação com velocidade 1000 para o destino do href;
		scrollTop: $($(this).attr("#pf2")).offset().top
	}, 1000);

	// Faz com que o destino do link não vá para a url
	event.preventDefault();
});