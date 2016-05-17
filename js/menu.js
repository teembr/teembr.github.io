$(document).ready(function() {
    $(".gotohere").on("click", function(e) {
        e.preventDefault();

        $("body, html").animate({ scrollTop: $( $(this).attr('href') ).offset().top - 70 }, 600);     
    });

    $(".apparel-btn").on("click", function(e) {
    	e.preventDefault();

    	$(this).addClass("active");
    	$('.branding-btn').removeClass('active');

    	$('.apparel-design').css('display', 'block');
    	$('.branding').css('display', 'none');
    });

    $(".branding-btn").on("click", function(e) {
    	e.preventDefault();

    	$(this).addClass("active");
    	$('.apparel-btn').removeClass('active');

    	$('.branding').css('display','block');
    	$('.apparel-design').css('display', 'none');
    });
});