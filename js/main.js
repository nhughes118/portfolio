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
		$('html,body').animate({
			'scrollTop': $('#scroll-1').offset().top-100
		}, 500);
	});	
	
	$('#site-2').click(function(){
		$('html,body').animate({
			'scrollTop': $('#scroll-2').offset().top-100
		}, 500);
	});	
	
	$('#site-3').click(function(){
		$('html,body').animate({
			'scrollTop': $('#scroll-3').offset().top-100
		}, 500);
	});	
	
	$('#site-4').click(function(){
		$('html,body').animate({
			'scrollTop': $('#scroll-4').offset().top-100
		}, 500);
	});
	
	$('.site-1-all').click(function(){
		window.location.href = "portfolio.html";
	});
  
}); // closes my document.ready