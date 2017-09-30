$('.navbar-item').click(function(){
	$('.active').removeClass('active');
    $(this).addClass('active');
});

$(window).resize(function(e) {
   setPaddingTop();
});

$(document).ready(function(e) {
   setPaddingTop();
});

$('.header-image').load(function() {
	setPaddingTop();
});

function setPaddingTop() {
	//var h = $('#nav').height() + 20;
   //document.body.style.paddingTop = h + 'px';
}