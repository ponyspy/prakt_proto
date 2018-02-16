$(function() {
	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.timeline_block').on('mousemove', function(e) {
			var $this = $(this).children('.timeline_outer');

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

	$('.month_item')
		.on('click', function(e) {
			console.log('month')
			$('.events_title').attr('data-month', $(this).attr('data-month'));
			$('.month_item').removeClass('selected').children('.day_item').off('click').end().filter(this).addClass('selected')
			.children('.day_item').on('click', function(e) {
				console.log('day')
				$('.day_item').removeClass('selected').filter(this).addClass('selected');
			});
		})
		.on('mouseenter', function(e) {
			$('.events_title').text($(this).attr('data-month'));
		})
		.on('mouseleave', function(e) {
			$('.events_title').text($('.events_title').attr('data-month'));
		});
});