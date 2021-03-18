"use strict";

function slider(element, options) {
    if(typeof options === "undefined") {
        options = {};
    }

    new Swiper(element, {
        slidesPerView: options.slidesPerView ? options.slidesPerView : 'auto',
        spaceBetween: options.spaceBetween ? options.spaceBetween : 0,
        centeredSlides: options.centeredSlides ? options.centeredSlides : true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 'auto',
                centeredSlides: true
            },
            1023: {
                slidesPerView: 1,
                centeredSlides: false
            },
        }
    })
}

window.addEventListener('load', function(){
    slider(".swiper-container");
});