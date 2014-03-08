/*
$(document).ready(function(){
  $('#quick-search').fadeIn(2000);
  $('input[type=checkbox]').on('click', function(e){
		e.preventDefault();
	  $('#quick-search').fadeOut(1000);
    $('.list-parent-controls').delay(1005).fadeIn(2000);
  });
  $('#input[type=checkbox]').on('click', function(e){
	  e.preventDefault();
	  $('.list-parent-controls').fadeOut(1000);
	$('#quick-search').delay(1005).fadeIn(2000);
  });
});
*/

/*
$(document).ready(function(){
	$('#quick-search').fadeIn(0);
	$('input[type=checkbox]').click(function(){
		if($(this).is(':checked')){
			e.preventDefault();
			$('#quick-search').fadeOut(0);
			$('.list-parent-controls').delay(1005).fadeIn(2000);
		} else {
			e.preventDefault();
			$('.list-parent-controls').fadeOut(1000);
			$('#quick-search').delay(1005).fadeIn(2000);
		}
	});
});
*/
$(document).ready(function(){
$('#quick-search').fadeIn(0);
});

function OnChangeCheckbox (checkbox) {	
	if (checkbox.checked) {
		$('#quick-search').fadeOut(0);
		$('.list-parent-controls').delay(0).fadeIn(0);
	}
	else {
		$('.list-parent-controls').fadeOut(0);
		$('#quick-search').fadeIn(0);
	}
}	