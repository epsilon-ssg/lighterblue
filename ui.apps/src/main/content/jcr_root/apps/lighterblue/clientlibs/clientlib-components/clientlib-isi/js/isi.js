$(window).scroll(function() {
    if (checkVisible($('.isiContainer'))) {
        $('.isiwrapper').removeClass('isiwrapper-fixed');
        $('.isiContainer').css('height', 'auto')
    } else {
         $('.isiwrapper').addClass('isiwrapper-fixed');
		  $('.isiContainer').css('height', $('.isiwrapper .content').outerHeight() + 48 )
    }
});
var topValue;

var windowSize = $(window).width();
if (windowSize <= 990) {
    topValue = 95;
}else{
    topValue = 133;
}


function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top + 150,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)));
    if (eval == "above") return ((y < (vpH + st)));
}

// check if the element is in visible in viewport 
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function(){
     if (checkVisible($('.isiContainer'))) {  
            $('.isiContainer').css('height', 'auto')
        } else {
            $('.isiContainer').css('height', $('.isiwrapper .content').outerHeight() + 48 )
        }
    
    if($('.isiContainer').isInViewport() == true){
        $('.isiwrapper').removeClass('isiwrapper-fixed')
        $('.isiContainer').css('height', 'auto');
    }

    $('.isi-more-text').click(function(e){
         e.preventDefault();
         e.stopPropagation();
         e.stopImmediatePropagation();
        $('.isiwrapper').addClass('expand');
        $('html, body').addClass('overlay');
    });

    $('.isi-less-text').click(function(e){
         e.preventDefault();
         e.stopPropagation();
         e.stopImmediatePropagation();
        $('.isiwrapper').removeClass('expand');
        $('html, body').removeClass('overlay');
    });

    $(document).on('click', '.header-menu a[href="#isi"]', function(e){
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        $('html, body').animate({
            scrollTop: $(".isiContainer").offset().top - topValue
        }, 1000);
    });
 })