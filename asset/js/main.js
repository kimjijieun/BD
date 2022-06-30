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

//두번째 슬라이드
    var mid = new Swiper(".mid-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        breakpoints:{
            769:{
                slidesPerView: 1,
            }
          },
      });


//마지막 슬라이드
      var end = new Swiper(".end-slide", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".next2",
            prevEl: ".prev2",
        },
        breakpoints:{
            769:{
                slidesPerView: 4,
            }
          },
      });

//new 슬라이드
      var New = new Swiper(".new-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".next3",
            prevEl: ".prev3",
        },
        breakpoints:{
            769:{
                slidesPerView: 3,
            }
          },
      });


    //헤더 슬라이드시 사라졌다가 나타나기
    $(window).scroll(function(){


        if ($(this).scrollTop()>0) {
            // $('.header').hide();
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
        
        // curr = $(this).scrollTop();
        // target = $('.sc-featured').offset().top;

        // if (curr >= '.sc-featured') {
        //     $('header').addClass('active, white')
        // } else {
        //     $('header').removeClass('active, white')
        // }


        // target = $('.sc-featured').offset().top;

        // if ($(this).scrollTop()>20, curr >= '.sc-featured') {
            // $('header').hide()
        //     $('header').addClass('active, white')
        // } else {
        //     $('header').removeClass('active, white')
        // }

        if ($(this).scrollTop()=='.txt-area'+100) {
            $('.txt-area').addClass('active');
        }
    })
    

    $(window).trigger('scroll');


    $('.link-search').click(function(){
        $('.link-search').addClass('active')
    })
    $('.link-search').click(function(){
        $('.link-search').removeClass('active')
    })
});