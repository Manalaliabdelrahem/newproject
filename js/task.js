$(document).ready(function(){
$('.home').animate({
    'width' : '100%',
} , 2000 ,function(){
    $('.home').animate({
        'height' : '700px',
    } ,2000 ,function(){
        $('.home h1').slideDown(1500 , function(){
            $('.home .c1').slideDown(1500 , function(){
                $('.home .c2').slideDown(1500 , function(){
                    $('.home .c3').slideDown(1500)
                })
            });
        });
    })
})

})