$(function(){
    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
    })

    $('a').mouseover(function(){

        if($(this).data('name')){
            val = $(this).data('name');
        }else{
            val=''
        }
        val = $(this).data('name')?$(this).data('name'):'';


        gsap.to('.cursor',{
            scale:1.8,
            opacity:0.7
        })
    })
    $('a').mouseleave(function(){
        $('.cursor').text('');
        gsap.to('.cursor',{
            scale:1,
            opacity:1
        })
    })

    gsap.to('.recom-artist-area .img-box',{

        scrollTrigger:{
            trigger:".recom-artist-area",
            start:"top 80%",
            end: "bottom top",
            scrub:1, 
        }, 

        yPercent:-10 
    })



    var main = new Swiper(".main-slide", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
      });


    $('.sc-visual .scroll-down').click(function(){
        target = $('.sc-featured').offset().top+1
        $('html,body').animate({scrollTop:target},300)
    })


    var featuredSlide = new Swiper(".mid-slide", {
        spaceBetween: 20,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
      });

      featuredSlide.on('touchStart',function(){
        $('.sc-featured .mid-slide').addClass('grab')
        console.log(1);
      })
      featuredSlide.on('touchEnd',function(){
        $('.sc-featured .mid-slide').removeClass('grab')
        console.log(2);
      })




      $('.contract-box').click(function(){
        iframe = `<iframe title="vimeo-player" src="https://player.vimeo.com/video/758722710?h=3069e3a0bf" width="640" height="360" frameborder="0" allowfullscreen></iframe>`
        $(this).html(iframe)
      })



      var end = new Swiper(".end-slide", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
      });

      gsap.to('.txt-area',{

        scrollTrigger:{
            trigger:".txt-area",
            start:"top 100%",
            end: "bottom top",
            scrub:1,
        },

        xPercent:-50 
      })




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



    $(window).scroll(function(){
        curr = $(this).scrollTop();
        visualHeight = $('.sc-visual').outerHeight();

        if (curr > visualHeight) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }


        recomHeight = $('.recom-artist-area').outerHeight();

        if (curr > recomHeight + 600) {
            $('.txt-subbox').addClass('active');
        }
    });



    $(window).trigger('scroll');


    $('.header .link-wrap').click(function(e){
        e.preventDefault();
        $('.link-wrap').addClass('open');
    })
    $('header').click(function(e){
        if( !$('.header .link-wrap').has(e.target).length ) $('.header .link-wrap').removeClass('open');
    });




    const menu = gsap.from('.menu-area .menu-item',{
        delay:100,
        opacity:0,
        yPercent:20,
        stagger:0.1,
        paused:true,
    })

    $('.header .util-area .btn-menu').click(function(e){
        e.preventDefault();

        menu.restart()

        $('.menu-area').addClass('active');
        $('body').addClass('active');
        
    });

    $('.header .menu-area .menu-close').click(function(e){
        e.preventDefault();

        $('.menu-area').removeClass('active');
        $('body').removeClass('active');
    });


});