$(window).scroll(function() {
   if( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 100) ) {
        console.log('asd');
        $(".fb-messenger").css("display", "none");
   }
   else {
        $(".fb-messenger").css("display", "block");
   }
});
