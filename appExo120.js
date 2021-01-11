// fill all frames
$('#fill').click(function (){
    $('.empty').addClass('full').removeClass('empty');
});

// empty all frames
$('#clear').click(function (){
    $('.full').addClass('empty').removeClass('full');
});

// switch fill/empty
$('.round').click(function (event){
    $(this).toggleClass('full empty');
});

// switch square
$('.square').click(function (event){
    $(this).parent().children().toggleClass('full empty');
});

// switch lozenge
$('#lozenge').click(function (){
    $('.loz').toggleClass('full empty');
    $('.line3 > div').toggleClass('full empty');
});

