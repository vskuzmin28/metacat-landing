/* window thanks */

$('.send-form').submit(function() {
    $.post($(this).attr('action'), $(this).serialize(), function(res) {         
   if (res.success == 1) {
       $('.popupCall').bPopup().close();
         $('.popupThanks').bPopup({
           closeClass:'close-popup-one',
               amsl: 0
          });
         setTimeout(function(){$('.popupThanks').bPopup().close();}, 6000);
     }else{
     alert(res.text);
     }
  }, 'json');
  return false;
})

/* wow animation */

new WOW().init();

// popup

$('.popupCall, .popupPolytic, .popupThanks').hide();

$('.linkCall').click(function(e){
    e.preventDefault();
	$('.popupCall').bPopup({
        closeClass:'popup__close',
        amsl: 0
    })
})

$('.linkPolytic').click(function(e){
    e.preventDefault();
	$('.popupPolytic').bPopup({
        closeClass:'popup__close',
        amsl: 0
    })
})

// mask
$('.phone-mask').mask('+7 (000) 000 0000');

$(".phone-mask").prop("required", "true");

// specialists

$('.specialistContentTwo, .specialistContentThree, .specialistContentFour, .specialistContentFive').hide();
$('.photoTwo, .photoThree, .photoFour, .photoFive').hide();

$('.specialistOne').click(function(e){
    e.preventDefault();
    $('.specialistOne').addClass('specialists__list-link_active');
    $('.specialistTwo, .specialistThree, .specialistFour, .specialistFive').removeClass('specialists__list-link_active');
    $('.photoOne, .specialistContentOne').fadeIn();
    $('.photoTwo, .photoThree, .photoFour, .photoFive').hide();
    $('.specialistContentTwo, .specialistContentThree, .specialistContentFour, .specialistContentFive').hide();
})

$('.specialistTwo').click(function(e){
    e.preventDefault();
    $('.specialistTwo').addClass('specialists__list-link_active');
    $('.specialistOne, .specialistThree, .specialistFour, .specialistFive').removeClass('specialists__list-link_active');
    $('.photoTwo, .specialistContentTwo').fadeIn();
    $('.photoOne, .photoThree, .photoFour, .photoFive').hide();
    $('.specialistContentOne, .specialistContentThree, .specialistContentFour, .specialistContentFive').hide();
})

$('.specialistThree').click(function(e){
    e.preventDefault();
    $('.specialistThree').addClass('specialists__list-link_active');
    $('.specialistTwo, .specialistOne, .specialistFour, .specialistFive').removeClass('specialists__list-link_active');
    $('.photoThree, .specialistContentThree').fadeIn();
    $('.photoTwo, .photoOne, .photoFour, .photoFive').hide();
    $('.specialistContentOne, .specialistContentTwo, .specialistContentFour, .specialistContentFive').hide();
})

$('.specialistFour').click(function(e){
    e.preventDefault();
    $('.specialistFour').addClass('specialists__list-link_active');
    $('.specialistTwo, .specialistOne, .specialistThree, .specialistFive').removeClass('specialists__list-link_active');
    $('.photoFour, .specialistContentFour').fadeIn();
    $('.photoTwo, .photoOne, .photoThree, .photoFive').hide();
    $('.specialistContentOne, .specialistContentTwo, .specialistContentThree, .specialistContentFive').hide();
})

$('.specialistFive').click(function(e){
    e.preventDefault();
    $('.specialistFive').addClass('specialists__list-link_active');
    $('.specialistTwo, .specialistOne, .specialistThree, .specialistFour').removeClass('specialists__list-link_active');
    $('.photoFive, .specialistContentFive').fadeIn();
    $('.photoTwo, .photoOne, .photoThree, .photoFour').hide();
    $('.specialistContentOne, .specialistContentTwo, .specialistContentThree, .specialistContentFour').hide();
})

// cases

$('.slideTwo, .slideThree, .slideFour').hide();

$('.linkSlideOne').click(function(e){
    e.preventDefault();
    $('.linkSlideOne').addClass('slider-nav__link_active');
    $('.linkSlideTwo, .linkSlideThree, .linkSlideFour').removeClass('slider-nav__link_active');
    $('.slideOne').fadeIn();
    $('.slideTwo, .slideThree, .slideFour').hide();
})

$('.linkSlideTwo').click(function(e){
    e.preventDefault();
    $('.linkSlideTwo').addClass('slider-nav__link_active');
    $('.linkSlideOne, .linkSlideThree, .linkSlideFour').removeClass('slider-nav__link_active');
    $('.slideTwo').fadeIn();
    $('.slideOne, .slideThree, .slideFour').hide();
})

$('.linkSlideThree').click(function(e){
    e.preventDefault();
    $('.linkSlideThree').addClass('slider-nav__link_active');
    $('.linkSlideTwo, .linkSlideOne, .linkSlideFour').removeClass('slider-nav__link_active');
    $('.slideThree').fadeIn();
    $('.slideTwo, .slideOne, .slideFour').hide();
})

$('.linkSlideFour').click(function(e){
    e.preventDefault();
    $('.linkSlideFour').addClass('slider-nav__link_active');
    $('.linkSlideTwo, .linkSlideThree, .linkSlideOne').removeClass('slider-nav__link_active');
    $('.slideFour').fadeIn();
    $('.slideTwo, .slideThree, .slideOne').hide();
})

// cases buttons

var n=0;
$('.slider-buttons__next').click(function(){
n=n+1;
    console.log(n);
    if(n == 1) {
        $('.linkSlideTwo').addClass('slider-nav__link_active');
        $('.linkSlideOne, .linkSlideThree, .linkSlideFour').removeClass('slider-nav__link_active');
        $('.slideTwo').fadeIn();
        $('.slideOne, .slideThree, .slideFour').hide();
    }

    if(n == 2) {
        $('.linkSlideThree').addClass('slider-nav__link_active');
        $('.linkSlideTwo, .linkSlideOne, .linkSlideFour').removeClass('slider-nav__link_active');
        $('.slideThree').fadeIn();
        $('.slideTwo, .slideOne, .slideFour').hide();
    }

    if(n == 3) {
        $('.linkSlideFour').addClass('slider-nav__link_active');
        $('.linkSlideTwo, .linkSlideThree, .linkSlideOne').removeClass('slider-nav__link_active');
        $('.slideFour').fadeIn();
        $('.slideTwo, .slideThree, .slideOne').hide();
    }
});

var p=0;
$('.slider-buttons__prev').click(function(){
p=p+1;
    console.log(n);
    if(p == 1) {
        $('.linkSlideFour').addClass('slider-nav__link_active');
        $('.linkSlideTwo, .linkSlideThree, .linkSlideOne').removeClass('slider-nav__link_active');
        $('.slideFour').fadeIn();
        $('.slideTwo, .slideThree, .slideOne').hide();
    }

    if(p == 2) {
        $('.linkSlideThree').addClass('slider-nav__link_active');
        $('.linkSlideTwo, .linkSlideOne, .linkSlideFour').removeClass('slider-nav__link_active');
        $('.slideThree').fadeIn();
        $('.slideTwo, .slideOne, .slideFour').hide();
    }

    if(p == 3) {
        $('.linkSlideTwo').addClass('slider-nav__link_active');
        $('.linkSlideOne, .linkSlideThree, .linkSlideFour').removeClass('slider-nav__link_active');
        $('.slideTwo').fadeIn();
        $('.slideOne, .slideThree, .slideFour').hide();
    }

    if(p == 4) {
        $('.linkSlideOne').addClass('slider-nav__link_active');
        $('.linkSlideTwo, .linkSlideThree, .linkSlideFour').removeClass('slider-nav__link_active');
        $('.slideOne').fadeIn();
        $('.slideTwo, .slideThree, .slideFour').hide();
    }
});
