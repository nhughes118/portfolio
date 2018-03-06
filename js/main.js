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
	
	$('#site-1').click(function(){
		var w = $(window).width()
		var offset = 100;
		if (w <= 940){
			offset = 400;
		} else {
			offset = 100;
		}
		console.log('offset: ', offset)
		
		$('html,body').animate({
			'scrollTop': $('#scroll-1').offset().top - offset
		});

	});
	
	$('#site-2').click(function(){
		var w = $(window).width()
		var offset = 100;
		if (w <= 940){
			offset = 400;
		} else {
			offset = 100;
		}
		console.log('offset: ', offset)
		
		$('html,body').animate({
			'scrollTop': $('#scroll-2').offset().top - offset
		});

	});
	
	$('#site-3').click(function(){
		var w = $(window).width()
		var offset = 100;
		if (w <= 940){
			offset = 400;
		} else {
			offset = 100;
		}
		console.log('offset: ', offset)
		
		$('html,body').animate({
			'scrollTop': $('#scroll-3').offset().top - offset
		});

	});
	
	$('#site-4').click(function(){
		var w = $(window).width()
		var offset = 100;
		if (w <= 940){
			offset = 400;
		} else {
			offset = 100;
		}
		console.log('offset: ', offset)
		
		$('html,body').animate({
			'scrollTop': $('#scroll-4').offset().top - offset
		});

	});
  
}); // closes my document.ready