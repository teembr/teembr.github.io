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
        $("header").addClass("over-bg");
    }
    else {
    	$("header").removeClass("over-bg");
    }
});