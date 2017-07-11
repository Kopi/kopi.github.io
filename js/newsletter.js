/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	$(function() {
    $('#lang-selector').on('click', function() {
			var isEnglish = $('.en').first().is(':visible');

			if (isEnglish) {
				$('.en').hide();
				$('.fr').show();
			} else {
				$('.en').show();
				$('.fr').hide();
			}
		});

    $('.fr').hide();
	});
})(jQuery);
