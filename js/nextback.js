$('a.main-scroll-next, a.main-scroll-back').click(function(e) {
    e.preventDefault();
});

$('.main-scroll-next').click(function(){
    var scene_text = $(this).closest(".scene-text").children("p");
    var st_len = scene_text.length;
    if(st_len <= 1 || (st_len > 1 && $(scene_text[st_len-1]).hasClass("show-text-active"))) {
        var section = $(this).closest("section").next("section");
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 500);
    }
    else {
        var curr_scene_text = $(this).closest(".scene-text").children("p.show-text-active");
        var next_scene_text = curr_scene_text.next();

        curr_scene_text.removeClass("show-text-active").css("display", "none");
        next_scene_text.addClass("show-text-active").css("display", "");
    }
});

$('.main-scroll-back').click(function(){
    var scene_text = $(this).closest(".scene-text").children("p");
    var st_len = scene_text.length;
    if(st_len <= 1 || (st_len > 1 && $(scene_text[0]).hasClass("show-text-active"))) {
        var section = $(this).closest("section").prev("section");
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 500);
    }
    else {
        var curr_scene_text = $(this).closest(".scene-text").children("p.show-text-active");
        var next_scene_text = curr_scene_text.prev();

        curr_scene_text.removeClass("show-text-active").css("display", "none");
        next_scene_text.addClass("show-text-active").css("display", "");
    }
});