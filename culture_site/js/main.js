var translateX = 0;

$('#next').on('click', function () {
	if (translateX === -75) {
		translateX = 0;
	} else {
		translateX -= 25;
	}

	$('.slides').css('transform', 'translateX(' + translateX + '%)');
});

$('#previous').on('click', function () {
	if (translateX === 0) {
		translateX = -75;
	} else {
		translateX += 25;
	}

	$('.slides').css('transform', 'translateX(' + translateX + '%)');
});
// Make it rain!

$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});
