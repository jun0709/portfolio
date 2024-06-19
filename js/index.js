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

 
    $(".open").click(function(){
        $(this).closest(".sec3_project").find(".popup").show();
    })
    $(".close_btn").click(function(){
        $(this).closest(".sec3_project").find(".popup").hide();
    })
   

    $(document).mouseup(function (e){
        if($(".popup").has(e.target).length === 0){
            $(".popup").hide();
        }
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
