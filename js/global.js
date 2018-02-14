$(function() {
	$('.menu_open').on('click', function(e) {
		$('.menu_items, .title_block, .menu_open').toggleClass('open');
	});
});