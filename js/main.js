$(document).ready(function () {
	var n = 1;
		setInterval(function () {
			$(".slide1, .slide2, .slide3, .slide4").fadeOut().delay(200);
			if (n == 5) {
				n = 0;
			}
			n++;
			str = ".slide" + n;
			$(str).fadeIn();
		}, 5000);
});