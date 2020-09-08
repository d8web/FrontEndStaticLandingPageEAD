$(function(){
    $('nav.mobile').click(function(){
		var listaMenu = $('nav.mobile ul');

		if(listaMenu.is(':hidden') == true) {
			var icone = $('.btn_menu_mobile').find('i');
			icone.removeClass('fa-bars');
			icone.addClass('fa-times');
			listaMenu.slideToggle();
		} else {
			var icone = $('.btn_menu_mobile').find('i');
			icone.removeClass('fa-times');
			icone.addClass('fa-bars');
			listaMenu.slideToggle();
        }
    })
});

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('#typewriter');
  typeWriter(titulo);