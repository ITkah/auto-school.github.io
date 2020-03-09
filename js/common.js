$(document).ready(function() {

    $('div.tabs__caption').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

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

    $(".tab-box").on("click", function(){
      $(this).toggleClass("active-tabs");
      $(this).children(".tab-info").slideToggle(50);
    });

    $('.single-item').slick({
        infinite: true,
        nav: false,
        dots: true,
        margin: 10
    });

    $('.single-item-2').slick({
      infinite: true,
      nav: false,
      dots: true,
      margin: 10,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    $('.teacher-item').slick({
      infinite: true,
      nav: true,
      dots: false,
      margin: 20,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: "<img src='img/icon/left.png' class='prev' alt='1'>",
      nextArrow: "<img src='img/icon/right.png' class='next' alt='2'>",
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            nav: false,
            margin: 10,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            nav: false,
            margin: 10,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nav: false,
            margin: 10,
            dots: true
          }
        }
      ]
  });

    $('.review-item').slick({
        infinite: true,
        nav: true,
        dots: false,
        margin: 10,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<img src='img/icon/left.png' class='prev' alt='1'>",
        nextArrow: "<img src='img/icon/right.png' class='next' alt='2'>",
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              nav: false,
              margin: 10,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              nav: false,
              margin: 10,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nav: false,
              margin: 10,
              dots: true
            }
          }
        ]
    });

    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

});