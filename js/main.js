
//nav show and hide

var $nav = $('nav');
var $header = $('header');

var flag = false;

function fixedNav() {
    if (scrollY >= $header.innerHeight() && !flag) {
        $nav.addClass('fixed-top').css('opacity', 0).animate({
            opacity: 1
        });
        flag = true;
    } else if (scrollY < $header.innerHeight() && flag) {
        $nav.animate({
            opacity: 0
        }, 500, function () {
            $nav.removeClass('fixed-top').css('opacity', 1)
        });
        flag = false;
    }
};
fixedNav();

$(window).on('scroll', fixedNav);





// ===============To_Top===============

$(window).on("scroll", function () {
    var scroll = $(this).scrollTop();

    if (scroll > 3600) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
})


$('#top').on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    })
})

// ===============To_Top===============