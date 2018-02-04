$(document).ready(function () {
  $juryButtons = $('.juryHeading')
  $publicButtons = $('.publicHeading')

  $juryButtons.on('click', function () {
    console.log('test')
    var $this = $(this)
    var $heading = $this.closest('.groupHeadingContainer')
    var $container = $this.closest('.rankingContainer')

    if ($heading.css('opacity') !== '1') {
      console.log('test 2')
      $heading.css('opacity', '1')
      $container
        .find('.rankingPublic .groupHeadingContainer')
        .css('opacity', '0.5')
      $container
        .find('.rankingPublic')
        .find('.result')
        .css('opacity', '0')
      $container
        .find('.rankingJury')
        .find('.result')
        .css('opacity', '1')
    }
  })

  $publicButtons.on('click', function () {
    console.log('test')
    var $this = $(this)
    var $heading = $this.closest('.groupHeadingContainer')
    var $container = $this.closest('.rankingContainer')

    if ($heading.css('opacity') !== '1') {
      console.log('test 2')
      $heading.css('opacity', '1')
      $container
        .find('.rankingJury .groupHeadingContainer')
        .css('opacity', '0.5')
      $container
        .find('.rankingJury')
        .find('.result')
        .css('opacity', '0')
      $container
        .find('.rankingPublic')
        .find('.result')
        .css('opacity', '1')
    }
  })
})
