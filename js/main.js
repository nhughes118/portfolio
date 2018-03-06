$(document).ready(function(){
	
	$('.dropdown').on('click', function(){
		$('.drpdwncontent').toggleClass('style');
		$('body').toggleClass('nav-bar-open');
	});
	
	$('#top').click(function(){
    $('html,body').animate({scrollTop: 0}, 500);
});

	$(function(){
		$('#pic-js').animate({'bottom': '0px'}, 1000);
	});
	
	$(function(){
		window.history.back();
	});
  
}); // closes my document.ready