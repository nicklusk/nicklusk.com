//26-5-2020 update: possibly shorter, and better, since 'click' now fires on a tap, and is not prevented by the previous script. 
//Also: more concatenation.
$(document).on('touchstart, click', 'a.taphover', function (e) {
    if (!$(this).hasClass('hover')) { e.preventDefault(); }
    $('.taphover').not($(this).toggleClass('hover')).removeClass('hover');
});

//the previous version:

//taphover - a solution to the lack of hover on touch devices.
//more info: http://www.hnldesign.nl/work/code/mouseover-hover-on-touch-devices-using-jquery/
$('a.taphover').on('touchstart', function (e) {
    'use strict'; //satisfy the code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('a.taphover').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});