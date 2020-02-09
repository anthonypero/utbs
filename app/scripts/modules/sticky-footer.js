jQuery(document).ready(function( $ ) {

    var targetOffset = $('#footer-header').height();
    var target = $('#footer-body');
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() - targetOffset;
    var targetTop = $(target).offset().top;
    var targetBottom = targetTop + $(target).height();

    if (targetTop <= viewportBottom) {
        $('body').removeClass('sticky-footer');
    } else {
        $('body').addClass('sticky-footer');
    }

    $(window).scroll(function() {

        var targetOffset = $('#footer-header').height();
        var target = $('#footer-body');
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height() - targetOffset;
        var targetTop = $(target).offset().top;
        var targetBottom = targetTop + $(target).height();

        if (targetTop <= viewportBottom) {
            $('body').removeClass('sticky-footer');
        } else {
            $('body').addClass('sticky-footer');
        }
    });
});