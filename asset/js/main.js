$(function(){

//    마우스 따라다니기
    // gsap.to  ~이후의 값
    // gsap.from   ~전을
    // gsap.fromTo ~전~후

    // gsap.to('.cursor',{

    // })
    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        // console.log(xVal+'//'+yVal);
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

        $(this).data('name')?val=$(this).data('name'):val='';
        //줄여쓰기 =>$('.cursor').html(`<span>${val}</span>`);
        
        // if ($(this).parents('.sc-featured').length) {
        //     // $('.cursor').text('featured');
        //     $('.cursor').html('<span>featured</span>');
        // }else if ($(this).parents('.recom-artist-area').length) {
        //     $('.cursor').html('<span>추가</span>');
        // }

        gsap.to('.cursor',{
            scale:1.8
        })
    })
    $('a').mouseleave(function(){
        $('.cursor').text('');
        gsap.to('.cursor',{
            scale:1
        })
    })

    gsap.to('.recom-artist-area .img-box',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".recom-artist-area", //총구,기준태그 recom-artist-area의 시작과 끝
            start:"top 80%", //(트리거기준, 윈도우기준) 둘이 만나야 실행
            end: "bottom top", //(트리거기준, 윈도우기준) 둘이 만나야 실행
            markers:true, //좌표표시
            scrub:1, //이ㅔㄱ 있어야 여러번 사용가능, 없으면 1회성
        }, //컴마 필수

        yPercent:-10 //퍼센테이지
    })


    // 메인 슬라이드
    var main = new Swiper(".main-slide", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
      });


    //   .sc-visual .scroll-down
    $('.sc-visual .scroll-down').click(function(){
        target = $('.sc-featured').offset().top+1
        $('html,body').animate({scrollTop:target},300)
    })

//두번째 슬라이드
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
        iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/omuSTuF-fxk?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        $(this).html(iframe)
      })

//마지막 슬라이드
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
            trigger:".txt-area", //기준태그 recom-artist-area의 시작과 끝
            start:"top 100%", //(트리거기준, 윈도우) 둘이 만나야 실행
            end: "bottom top", //(트리거기준, 윈도우) 둘이 만나야 실행
            markers:true, //좌표표시
            scrub:1, //이ㅔㄱ 있어야 여러번 사용가능, 없으면 1회성
        }, //컴마 필수

        xPercent:-100 //움직이는 애가 -100프로까지 가라
      })




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
        curr = $(this).scrollTop();
        visualHeight = $('.sc-visual').outerHeight();
        // scvisual = $('.sc-visual').outerHeight();
        if (curr > visualHeight) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
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
    // $('.header .util-area .link-wrap').click(function(){
    //     $('.link-wrap').removeClass('open')
    // })


    $('.header .util-area .btn-menu').click(function(e){
        e.preventDefault();

        $('.menu-area').addClass('active');
        $('body').addClass('active');
        // $('.menu-area .menu-item').delay(300).fadeIn(700);
        // $('.menu-area .menu-item').delay(300).fadeToggle(700);
        
    })

    $('.header .menu-area .menu-close').click(function(e){
        e.preventDefault();

        $('.menu-area').removeClass('active');
        $('body').removeClass('active');
        // $('.menu-area .menu-item').fadeOut();
    })

    // $(".header .menu-area .menu-item").delay(300).animate({opacity: "1"}, 1000);
    
    // $('.header .menu-area .opacity1').delay(300).animate({
    //     opacity: '1',
    //     transform: 'translateY(0)',
    //     // transitionDelay: '0.7s'
    //     }, 1000);
    // $('.header .menu-area .opacity2').delay(500).animate({
    //     opacity: '1',
    //     transform: 'translateY(0)',
    //     // transitionDelay: '1s'
    //     }, 1000);
    // $('.header .menu-area .opacity3').delay(700).animate({
    //     opacity: '1',
    //     transform: 'translateY(0)',
    //     // transitionDelay: '2s'
    //     }, 1000);
    // $('.header .menu-area .opacity4').delay(900).animate({
    //     opacity: '1',
    //     transform: 'translateY(0)',
    //     // transitionDelay: '3s'
    //     }, 1000);
    // $('.header .menu-area .opacity5').delay(1100).animate({
    //     opacity: '1',
    //     transform: 'translateY(0)',
    //     // transitionDelay: '4s'
    //     }, 1000);
    // $('.header .menu-area .opacity6').delay(1300).animate({
    //     opacity: '1',
    //     transform: 'translateY(0)',
    //     // transitionDelay: '5s'
    //     }, 1000);

    
});