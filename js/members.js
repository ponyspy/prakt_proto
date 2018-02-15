$(function() {
	var lorem_text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	$blocks = $('.block');

	$blocks.on('click', function(e) {
		var $current_block = $(this);
		var $set = $current_block.nextAll('.block').addBack(this);

		$set.each(function() {
			var $this = $(this);

			if ($this.offset().left + $this.width() > $('.outer').width()) {
				var $panel = $('<div/>', {'class': 'panel'});
				var $in = $('<div/>', {'class': 'in', 'text': $current_block.text() + ' - ' + lorem_text });

				$('.panel').remove();
				$blocks.removeClass('active');

				$current_block.addClass('active');
				$this.after($panel.append($in));

				return false;
			} else if ($this.index('.block') + 1 == $blocks.length) {
				var $panel = $('<div/>', {'class': 'panel'});
				var $in = $('<div/>', {'class': 'in', 'text': $current_block.text() + ' - ' + lorem_text })

				$('.panel').remove();
				$blocks.removeClass('active');

				$current_block.addClass('active');
				$set.last().after($panel.append($in));

				return false;
			}
		});

		$('body').animate({
			'scrollTop': $current_block.offset().top - 5
		}, 300);

	});

	$('.outer').on('click', function(e) {
		if (e.target.className !== 'in') {
			$('.panel').remove();
			$blocks.removeClass('active');
		}
	});
});