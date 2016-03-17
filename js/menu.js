$(document).ready(function() {
	var viewPortHeight = 0;

    $(".gotohere").on("click", function(e) {
        e.preventDefault();

        $("body, html").animate({ scrollTop: $( $(this).attr('href') ).offset().top - 70 }, 600);     
    });
});