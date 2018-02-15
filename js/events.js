$(function() {
	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.timeline_block').on('mousemove', function(e) {
			var $this = $(this);

			var percent = (e.pageX - $this.offset().left) / $this.width() * 1.1 - 0.25;
			$this.scrollLeft($this.children('.timeline_inner').width() * percent);
		});
	}

	$(document).on('scroll', function(e) {
		var $title = $('.title_block');
		var $timeline = $('.timeline_block');

		$(this).scrollTop() >= $title.height() + $title.offset().top
			? $timeline.addClass('fix')
			: $timeline.removeClass('fix');
	});
});