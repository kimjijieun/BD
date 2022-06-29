$(function(){

    // 메인 슬라이드
    var main = new Swiper(".main-slide", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
      });


    var midslide = new Swiper(".mid-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
      });





});