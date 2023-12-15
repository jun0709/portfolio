$(document).ready(function(){
    let timer = 700;
    function s_move(tmp_pos) {
        $('html, body').stop().animate({
            scrollTop: tmp_pos
        }, timer, 'linear')
    }
    
    
    $('.btn_ul a').click(function(){ 
        event.preventDefault(); 
    
        let href = $(this).attr('href');
        s_move($(href).offset().top) 
    })
    
    $("dong0").hover(function(){
        $('rotate1').css("transform","rotate(450deg)");  
    },function(){
        $('rotate1').css("transform","rotate(0deg)");  
    })

    // $('.sec_pre_box').click(function(){
    //     $('.sec2_box').slideToggle(500,'linear' );
    //   });

    $('.sec_pre_box1').click(function(){
        $('.sec_pre_box1').removeClass('display_block').addClass('display_none');
        $('.sec_pre_box2').addClass('display_block').removeClass('display_none');
        $('#sec2_box').addClass('scale_1').removeClass('scale_0');
        $('.click').addClass('display_none').removeClass('display_block');
    })
    $('.sec_pre_box2').click(function(){
        $('.sec_pre_box2').removeClass('display_block').addClass('display_none');
        $('.sec_pre_box1').addClass('display_block').removeClass('display_none');
        $('#sec2_box').addClass('scale_0').removeClass('scale_1');
        $('.click').addClass('display_block').removeClass('display_none');
    })




            
var swiper = new Swiper(".mySwiper", {
    slidesPerView:4,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000, 
    },
    speed: 3000,
    loop: true,
    direction: 'horizontal',
    effect: 'cube'
});


$(window).scroll(function(){
    if($('#sec1').offset().top<= $(window).scrollTop() +200){
        $('.sec1_box').css({
            transform:"translateX(0)"
        })
        $('.info_p').css({
            opacity:"1",
           transform:"translateY(0)"
        })
        
    }
    else{
        $('.sec1_box').css({
            transform:"translateX(200%)"
        })
        $('.info_p').css({
            opacity:"0",
            transform:"translateY(100px)"
         })
    }
})

})
