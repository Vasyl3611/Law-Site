

$(document).ready(function() {

  var height = $('.header__top').innerHeight();
  $(window).scroll(function(){
    if($(this).scrollTop()>150){
      $('header').css('padding-top', height);
      $('.header__top').addClass('sticky');
    }
    else if ($(this).scrollTop()<150){
      $('header').css('padding-top', 0);
      $('.header__top').removeClass('sticky');
    }
  });



    $('.nav-list, footer').on('click','a', function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top -50}, 600);
  });


/*
jQuery.validator.addMethod("phoneno", function(phone_number, element) {
   return this.optional(element) || phone_number.match(/\+[0-9]{2}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
}, "Введите Ваш телефон");
-->
/* Валидация формы */
jQuery.validator.addMethod("phoneno", function(phone_number, element) {
      return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
    }, "Введите Ваш телефон");

$(".example-form").validate({
  messages: {
    name: "Введите Ваше имя",
    phone: "Введите Ваш телефон",
  },
  rules: {
    "phone": {
      required: true,
      phoneno: true
    }
  },
  submitHandler: function(form) {
    var t = {
      email: jQuery(".example-form").find("input[name=email]").val(),
    };
    ajaxSend('.example-form', t);
  }
});


function ajaxSend(formName, data) {
  jQuery.ajax({
    type: "POST",
    url: "sendmail.php",
    data: data,
    success: function() {
      $(".modal").popup("hide");
      $("#thanks").popup("show");
      setTimeout(function() {
        $(formName).trigger('reset');
      }, 2000);
    }
  });
}


$(".callback-form").validate({
  messages: {
    name: "Введите Ваше имя",
    phone: "Введите Ваш телефон",
  },
  rules: {
    "phone": {
      required: true,
      phoneno: true
    }
  },
  submitHandler: function(form) {
    var t = {
      name: jQuery(".callback-form").find("input[name=name]").val(),
      phone: jQuery(".callback-form").find("input[name=phone]").val(),
      subject: jQuery(".callback-form").find("input[name=subject]").val()
    };
    ajaxSend('.callback-form', t);
  }
});



$('.modal').popup({ transition: 'all 0.3s' });

//$(".modal").reset();

$(".modal .callback_close").click(function(){
  var form = $(this).parent().find("form"); 
  $(form).trigger('reset');
})


$(".ask-form").validate({
    messages: {
      name: "Введите Ваше имя",
      phone: "Введите Ваш телефон",
      text: "Введите Ваш комментарий"
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      },
      "text": {
        required: true
      }
    },
    submitHandler: function(form) {
      var t = {
          name: jQuery(".ask-form").find("input[name=name]").val(),
          phone: jQuery(".ask-form").find("input[name=phone]").val(),
          subject: jQuery(".ask-form").find("input[name=subject]").val(),
          text: jQuery(".ask-form").find("textarea[name=text]").val()
      };
      ajaxSend('.ask-form', t);
    }
  });



  //reviews-carousel
  $('.reviews-carousel').owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    margin: 30,
    autoHeight: true,
    dots: false,
    navText: [$('.prev'),$('.next')]
  });

  

});

$(function() {
  $(".owl-carousel").owlCarousel();
});
  $('.certificate__list').owlCarousel({
    items: 1,
    nav: true,
    navText: [
      '<svg class="certificate__list-icon testimonial__list-icon--prev"><use xlink:href="#icon-prev"></use></svg>',
      '<svg class="certificate__list-icon testimonial__list-icon--next"><use xlink:href="#icon-next"></use></svg>'
    ],
  });



var acc = $('.accordion__top');
  var accContent = $('.accordion__content');
  $('.accordion__title.active').next().slideDown(500);
  acc.on('click', function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp(500);
    }
    else {
      $(this).addClass('active');
      accContent.not($(this).next()).slideUp(500);
      acc.not($(this)).removeClass('active');
      $(this).next().slideDown(500);
    }
  });



$(document).ready(function() {
   $(".fancybox").fancybox({
       openEffect : 'none',
       closeEffect : 'none'
   });
});

$('input[type=tel]').mask('+7 (000) 000-00-00');

function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.815162, lng: 37.637431},
          zoom: 11,
          styles: [
          {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "weight": "2.00"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#9c9c9c"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#eeeeee"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#7b7b7b"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#46bcec"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c8d7d4"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#070707"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          }
      ]
        });
        var marker = new google.maps.Marker({
            position: {lat: 55.815162, lng: 37.637431},
            map: map,
            // icon: 'img/mark.png'
          });
      };






  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $(".header__nav").removeClass("header__nav-active");
        $(".hamburger").removeClass("is-active");
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000, function() {
        });
      }
    }
  });


  $('.hamburger--collapse').click(function() {
 $(this).toggleClass('is-active');
 $('.header__nav').toggleClass('header__nav-active');

});