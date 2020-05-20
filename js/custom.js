$(function(){
    
    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
         event.preventDefault(); 
        
         var $this = $(this),
             blockid = $this.data('scroll'),
             blockoffset = $(blockid).offset().top;
        
        $("#menu a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockoffset
        }, 500);
        
        })
    
    
    
    $('.menu-toggle').click(function(){
        $(this).toggleClass('active')
        $('.menu').slideToggle(400)
        
    })
    
    $('.tabs a').click(function(){
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active');    
    var id = $(this).attr('href');  
    $(id).removeClass('hide');    
    $(this).parent().addClass('active');
    return false
    });

    $('.banner-slider, .testmonial-slider').slick({
        arrows: false,
        dots: true,
    });
    
    $('.portfolio-slider').slick({
        dots:true,
        appendArrows: '.portfolio-slider__buttons',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                }
            }
        ]
    })
    
    
    $nav_tabs_slider = $('.nav-tab-list');
    settings = {
        sliderToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        infinite: false,
    }
    
    $nav_tabs_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).find('.slick-current').siblings().removeClass('active');    
        var id = $(this).find('.slick-current a').attr('href');  
        $(id).removeClass('hide');    
        $(this).find('.slick-current').addClass('active');
        return false
    })
    
    $(window).on('resize load', function(){
        if($(window).width() > 770) {
            if($nav_tabs_slider.hasClass('slick-initialized')) {
                $nav_tabs_slider.slick('unslick')    
            }
            return
            
        }
        if(!$nav_tabs_slider.hasClass('slick-initialized')) {
            return $nav_tabs_slider.slick(settings)
        }
        
    })
    
    
});

   
function initMap() {
    
    var coordinates =  {lat: -37.805792, lng: 144.961182 }, //координаты центра карты
        markerImg = 'img/marker.png', //Иконка для маркера
    
    //создаём карту и настраиваем
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates, 
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления                 
        scrollwheel: false, // отключает масштабирование колёсиком мыши                                           
    });
    
    //маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера
        map: map, // ставим маркер в карту с id
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });
    
}

//Запускаем карту при загрузке страницы
google.maps.event.addDomListener(window, 'load', initMap);

