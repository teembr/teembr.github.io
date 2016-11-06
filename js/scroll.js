$(window).scroll(function() {
    var height = $(window).scrollTop();
    var viewPortHeight = 0;
    if (typeof window.innerWidth != 'undefined'){
		viewPortHeight = window.innerHeight
 	}
	else {
	   viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
	}

    if(height  > viewPortHeight - 94) {
        $(".info-container").addClass("scrolled");
        $(".info-container > .btn").addClass("primary-btn-orange");
        $(".info-container > .btn").removeClass("primary-btn-white");
    }
    else {
    	$(".info-container").removeClass("scrolled");
        $(".info-container > .btn").addClass("primary-btn-white");
        $(".info-container > .btn").removeClass("primary-btn-orange");
    }
});