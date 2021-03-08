$(function () {
  $('.carousel__inner').slick({
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});