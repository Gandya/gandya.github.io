// adaptive menu
jQuery(document).ready(function($) {
   $(function() {
   var pull = $('#pull');
      menu = $('nav.clearfix ul');
      menuHeight = menu.height();

   $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
   });

   $(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && menu.is(':hidden')) {
         menu.removeAttr('style');
      }
   });
});
   // slider hover
   // 1 слайд
  $('.swiper-overlay-1').hover(function() {
    // навели мышь на элемент
    $('.swiper-overlay-absolute-1').fadeIn("200", function() {
      $('.swiper-overlay-absolute-1').css('display', 'block');
    })
  }, function() {
    // убрали мышь с элемента
    $('.swiper-overlay-absolute-1').fadeOut("200", function() {
      $('.swiper-overlay-absolute-1').css('display', 'none');
    })
  });
  // 2 слайд
  $('.swiper-overlay-2').hover(function() {
    // навели мышь на элемент
    $('.swiper-overlay-absolute-2').fadeIn("200", function() {
      $('.swiper-overlay-absolute-2').css('display', 'block');
    })
  }, function() {
    // убрали мышь с элемента
    $('.swiper-overlay-absolute-2').fadeOut("200", function() {
      $('.swiper-overlay-absolute-2').css('display', 'none');
    })
  });
  // 3 слайд
  $('.swiper-overlay-3').hover(function() {
    // навели мышь на элемент
    $('.swiper-overlay-absolute-3').fadeIn("200", function() {
      $('.swiper-overlay-absolute-3').css('display', 'block');
    })
  }, function() {
    // убрали мышь с элемента
    $('.swiper-overlay-absolute-3').fadeOut("200", function() {
      $('.swiper-overlay-absolute-3').css('display', 'none');
    })
  });
// yandex map
ymaps.ready(init);
function init() {
    
var myMap = new ymaps.Map("map", {
   center: [47.212589, 39.660530],
   zoom: 12,
   controls: []
});

// Собственное изображение для метки с контентом
var placemark4 = new ymaps.Placemark([47.212589, 39.660530], {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
          
      // Своё изображение иконки метки.
      iconImageHref: 'assets/images/icons/location-icon.png',
      // Размеры метки.
      iconImageSize: [40, 60]
   });
       
   myMap.geoObjects.add(placemark4);
   }
});
