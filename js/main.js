$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    // console.log(scrolled);
    $('.htext').css({
    	'transform' : 'translate(0%, ' + scrolled + '%'
    });
    $('.sect_2 img').css({
    	'transform' : 'translate(0%, ' + scrolled  / 20 + '%'
    });
}