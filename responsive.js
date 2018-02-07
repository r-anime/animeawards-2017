//var $juryButtons = $('.juryHeading')
//var $publicButtons = $('.publicHeading')

function juryButtonClick(param) {
	var $this = $(param);
	var $heading = $this.closest('.groupHeadingContainer');
	var $container = $this.closest('.rankingContainer');

	if ($heading.css('opacity') !== '1') {
	  $heading.css('opacity', '1');
	  $container
		.find('.rankingPublic .groupHeadingContainer')
		.css('opacity', '0.5');
	  $container
		.find('.rankingPublic')
		.find('.result')
		.css('opacity', '0');
	  $container
		.find('.rankingJury')
		.find('.result')
		.css('opacity', '1');
	}
}

function publicButtonClick(param){
    var $this = $(param);
    var $heading = $this.closest('.groupHeadingContainer');
    var $container = $this.closest('.rankingContainer');

    if ($heading.css('opacity') !== '1') {
      $heading.css('opacity', '1');
      $container
        .find('.rankingJury .groupHeadingContainer')
        .css('opacity', '0.5');
      $container
        .find('.rankingJury')
        .find('.result')
        .css('opacity', '0');
      $container
        .find('.rankingPublic')
        .find('.result')
        .css('opacity', '1');
    }
}