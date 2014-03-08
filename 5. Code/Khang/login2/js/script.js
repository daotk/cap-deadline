$(document).ready(function(){
  $('#login-box').fadeIn(2000);
  $('#register').on('click', function(e){
	  e.preventDefault();
	  $('#login-box').fadeOut(1000);
    $('#register-box').delay(1005).fadeIn(2000);
  });
  $('#login').on('click', function(e){
	  e.preventDefault();
	  $('#register-box').fadeOut(1000);
    $('#login-box').delay(1005).fadeIn(2000);
  });
});

