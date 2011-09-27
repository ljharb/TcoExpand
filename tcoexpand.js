(function ($) {
	if ($) {
		$('a[data-expanded-url][data-ultimate-url]').each(function () {
			var $this = $(this),
				url = $this.data('ultimate-url');
			$this.attr('href', url).html(url).removeAttr('data-expanded-url');
		});
	}
}(jQuery));
