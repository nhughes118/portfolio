$(document ).ready(function(){
	
	$('.dropdown').on('click', function(){
		$('.drpdwncontent').toggleClass('style');
		$('body').toggleClass('nav-bar-open');
	});
	
	$('#top').click(function(){
    $('html,body').animate({scrollTop: 0}, 500);
});
	
/*
	$('#submit-button').on('click', function(){
			var firstName = $('#fname').val()
			var lastName = $('#lname').val()
			var emailAdd = $('#email').val()
			var commentBox = $('#comments').val()
			console.log(firstName + ' ' + lastName + ' ' + emailAdd + ' ' + commentBox)
			window.location.href = 'mailto: nhughes118@gmail.com'
		});
*/



  
}); // closes my document.ready