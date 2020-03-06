$(document).ready(function() {
    var header = $("header");

    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {

            header.addClass("header-fix");

        } else if ($(this).scrollTop() <= 100) {

            header.removeClass("header-fix");

        }

    });

    $(".btn-call-menu").on("click", function() {
        $("nav").slideToggle(100);
    });

});