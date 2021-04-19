import {Swiper, Navigation, Pagination, Lazy} from "swiper";

Swiper.use([Navigation, Pagination, Lazy]);

// eslint-disable-next-line no-unused-vars
let gallery = new Swiper('.gallery__items', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-arrow-next',
      prevEl: '.swiper-arrow-prev',
    },
    observer: true,
    observeParents: true,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1099: {
        slidesPerView: 3,
      }
    }
});

