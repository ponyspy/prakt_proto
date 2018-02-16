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

	$(document).on('click', '.day_item', function(e) {
		$('.day_item').removeClass('selected').filter(this).addClass('selected');
	});

	$(document).on('click', '.day_item.selected', function(e) {
		$(this).removeClass('selected');
	});

	$('.month_placeholder')
		.on('click', function(e) {
			var $month_item = $(this).parent();

			$('.day_item.selected').removeClass('selected');
			$('.month_placeholder').removeClass('hide').filter(this).addClass('hide');
			$('.events_title').attr('data-month', $month_item.attr('data-month'));
			$('.month_item').removeClass('selected').filter($month_item).addClass('selected');
		})
		.on('mouseenter', function(e) {
			$('.events_title').text($(this).parent().attr('data-month'));
		})
		.on('mouseleave', function(e) {
			$('.events_title').text($('.events_title').attr('data-month'));
		});
});