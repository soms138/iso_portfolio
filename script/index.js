// promo
const promo_slide = new Swiper('.list',{
    slidesPerView: 1.5,
    direction: 'horizontal',
    autoplay:{delay:5000},
    speed:800,
    loop:true,
    centeredSlides:true,
    spaceBetween: 10,
    loopAdditionalSlides: 1,
    scrollbar:{el:'.swiper-scrollbar'},
    breakpoints:{
        530:{slidesPerView: 2,},
        935:{centeredSlides:true, slidesPerView: 2,},
        1200:{centeredSlides:false, slidesPerView: 2,},
    }
})