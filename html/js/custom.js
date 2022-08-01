$(window).on('load resize',function(){
    var headerHeight = $('.top-bar').outerHeight();
    $('.top-bar-spacer').height(headerHeight);
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
    })
});