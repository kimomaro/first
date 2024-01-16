$(function () {

  $(window).on('scroll', function () {
    let st = $(window).scrollTop();
    let life = $('.life').offset().top - 558;
    //new 모션
    //let newTop = $('.new').offset().top - 600;
    if (st >= life) {
      $('.main_visual .about').addClass('on');
    } else {
      $('.main_visual .about').removeClass('on');
    }

    let museum = $('.museum').offset().top + 50;
    //new 모션
    //let newTop = $('.new').offset().top - 600;
    if (st >= museum) {
      $('section.museum .contents .img_box ').addClass('on');
      $('section.museum .contents').addClass('on');
      $('section.museum .see_all2').addClass('on');
      $('section.museum .contents .txt_box ').addClass('on');
    } else {
      $('section.museum .contents').removeClass('on');
      $('section.museum .contents .img_box ').removeClass('on');
      $('section.museum .see_all2').removeClass('on');
      $('section.museum .contents .txt_box ').removeClass('on');
    }

    let cul = $('.culture').offset().top + 0;
    let cul2 = $('.culture').offset().top + 200;
    //new 모션
    //let newTop = $('.new').offset().top - 600;
    if (st >= cul) {
      $('section.culture .cul_bg div').addClass('on');
    } else {
      $('section.culture .cul_bg div').removeClass('on');
    }
/*     if (st <= cul2 && st >= cul) {
      $('section.culture .cul').addClass('on');
    } else {
      $('section.culture .cul').removeClass('on');
    } */
  })

  let swiper = new Swiper(".news_slide", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  /*   const inner = document.querySelector("section.museum .contents");
  const section = document.querySelector("section");
  
  window.onscroll = function() {
    let value = window.pageYOffset / section.offsetTop + 1;
    inner.style.transform = `scale(${value})`;
  };
  
  
  $(function(){
    
    let $window = $(window);    //Window object
    
    let scrollTime = 1.2;     //Scroll time
    let scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
      
    $window.on("mousewheel DOMMouseScroll", function(event){
      
      event.preventDefault(); 
                      
      let delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
      let scrollTop = $window.scrollTop();
      let finalScroll = scrollTop - parseInt(delta*scrollDistance);
        
      TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut, 
          overwrite: 5              
        });
            
    });
    
  }); */
  const frame = '.mc_left';
  const box = '.con';
  const speed = '0.5s';
  let grid = new Isotope(frame, {
    itemSelector: box,
    columnWidth: box,
    trasitionDuration: speed,
  })


  var swiper2 = new Swiper(".art_right", {
    slidesPerView: 3.5,
/*     spaceBetween: 30, */
/*     pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, */
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})