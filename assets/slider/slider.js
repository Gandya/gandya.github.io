const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '480': {
      slidesPerView: 1,
    },
    '720': {
      slidesPerView: 2,
    },
    '1120': {
      slidesPerView: 3,
    },
  }
});
