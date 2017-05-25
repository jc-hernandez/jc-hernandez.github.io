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
