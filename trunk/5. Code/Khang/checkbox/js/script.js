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

/*`
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

*/
// search bar display default
$(document).ready(function(){
$('#quick-search').fadeIn(0);
});

// when check boxes are checked above twice then display control bar
$(document).ready(function(){
var countChecked = function() {
  var n = $( "input:checked" ).length;
  //$( "div" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
  if ( n >= 2 ) {
	$('#quick-search').fadeOut(0);
	$('.list-parent-controls').delay(0).fadeIn(0);
  }else{
	$('.list-parent-controls').fadeOut(0);
	$('#quick-search').fadeIn(0);
  }
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );
});


/*
$(document).ready(function(){
  $(".list-question").click(function(){
	document.getElementById("checkbox").checked = true;
	return false;
  });
});*/


/*
$(document).ready(function(){
	$('.list-question').bind('click', function() {
		var checkbox = $(this).find(':checkbox');

		checkbox.attr('checked', !checkbox.attr('checked'));
	});
});
*/

/*
$(document).ready(function(){	
	$(".list-question").click(function() {
          $("input[name=name1]").attr('checked', true);
          return false;
    });
});*/

$(document).ready(function(){
	$('.list-question').click(function () {
		var href = $(this).attr('id');
	  if ($(this).find('input:checkbox[name=name0]').is(":checked")) {

		$(this).find('input:checkbox[name=name0]').attr("checked", false);
	  }
	  else {
		  $(this).find('input:checkbox[name=name0]').prop("checked", true);
	  }
	});
	/*
	
	 $('input[type=checkbox]').click(function (e) {
		 e.stopPropagation();
	 });
	 */
});