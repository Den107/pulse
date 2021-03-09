$(function () {
  //slider
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

  //tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

  //more
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });

  $('.button--mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  //validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        mail: {
          required: true,
          email: true
        },
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        phone: 'Пожалуйста, введите свой номер телефона',
        mail: {
          required: "Пожалуйста, введите свой email",
          email: "Адрес почты должен быть введен в формате name@domain.com"
        }
      }
    });
  }
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
});