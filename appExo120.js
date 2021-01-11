$('#fill').click(function (){
    $('.empty').addClass('full').removeClass('empty');
});

$('#clear').click(function (){
    $('.full').addClass('empty').removeClass('full');
});

$('.round').click(function (event){
    $(this).toggleClass('full empty');
});


// $('#fill').click(function (){
//     $('.line > div').toggleClass('full empty');
// });
//
