$(document).ready(function(){
	
	$('.dropdown').on('click', function(){
		$('.drpdwncontent').toggleClass('style');
		$('body').toggleClass('nav-bar-open');
	});
	
	$('#top').on('click', function(){
		$(window).scrollTop(0);
	});
}); // closes my document.ready