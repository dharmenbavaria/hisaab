$(window).on('load resize',function(){
    var headerHeight = $('.top-bar').outerHeight();
    $('.top-bar-spacer').height(headerHeight);
});

$(window).on('load resize',function(){
    var headerHeight1 = $('.expense-fixed-box').outerHeight();
    $('.position-fixed-spacer').css('padding-top', headerHeight1);
});

jQuery(document).ready(function(){

    // OTP BOX
    jQuery('.otp_box input').blur(function(){
        tmpval = jQuery(this).val();
        if(tmpval == '') {
            jQuery(this).addClass('empty');
            jQuery(this).removeClass('not-empty');
        } else {
            jQuery(this).addClass('not-empty');
            jQuery(this).removeClass('empty');
        }
    });

    // ACTIVE BOTTOM BAR
    $('.bottom-bar ul li a').click(function(){
        $('.bottom-bar li').removeClass("active");
        $(this).parent('li').addClass("active");
    });

    // PROGRESS BAR
    jQuery(".animated-progress span").each(function () {
        jQuery(this).animate(
        {
            width: jQuery(this).attr("data-progress") + "%",
        },1000);
        jQuery(this).text(jQuery(this).attr("data-progress") + "%");
    });

    // DASHBOARD SLIDER
    jQuery('.grip-dashboard-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
    });

    // BOTTOM MENU SPACER
    var bb_h = jQuery('.bottom-bar').innerHeight();
    jQuery('.bottom_spacer').css('height', bb_h);

    
    jQuery('ul.tabs li').click(function(){
        var tab_id = jQuery(this).attr('data-tab');

        jQuery('ul.tabs li').removeClass('current');
        jQuery('.tab-content').removeClass('current');

        jQuery(this).addClass('current');
        jQuery("#"+tab_id).addClass('current');
    });
});

//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function() {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    langArray.push(item);
})

$('#lang-a').html(langArray);

//Set the button value to the first el of the array
$('.lang-btn-select').html(langArray[0]);
$('.lang-btn-select').attr('value', 'en');

//change button stuff on click
$('#lang-a li').click(function() {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $('.lang-btn-select').html(item);
    $('.lang-btn-select').attr('value', value);
    $(".lang-b").toggle();
    $("body").removeClass('open-select-box');
    //console.log(value);
});

$(".lang-btn-select").click(function() {
    $("body").addClass('open-select-box');
    $(".lang-b").fadeToggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
    //find an item with value of sessionLang
    var langIndex = langArray.indexOf(sessionLang);
    $('.lang-btn-select').html(langArray[langIndex]);
    $('.lang-btn-select').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
    console.log(langIndex);
    $('.lang-btn-select').html(langArray[langIndex]);
    //$('.btn-select').attr('value', 'en');
}