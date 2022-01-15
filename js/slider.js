const slider = function () {
    let slides = document.querySelectorAll('.slide-item');
    let tlLine = document.querySelectorAll('.tl__line');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const backGroundEl = document.getElementById('container');
    const titleEl = document.querySelectorAll('.content-title')
    const contentEl = document.querySelectorAll('.content-desc')

    let curSlide = 0;
    const slideDistance = 13;
    let maxSlide = slides.length;
  
    // Functions
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => {
            if(i < curSlide) {
                s.style.transform = `translateX(${slideDistance * (slides.length - 1)- (slide - 1)* slideDistance  -1}rem)`
            } else {
                s.style.transitionDelay = '0.1s';
                s.style.transform = `translateX(${slideDistance * (-slide) -1}rem)`
            }
        }
      );
    };
    
    const changeBackground = function(slide){
        let url = slides[slide].dataset.imgBg;
        backGroundEl.style.backgroundImage = `url("${url}")`
    }

    const gotoTitle = function (slide) {
      titleEl.forEach(
        (s, i) => {
          s.style.transform = `translateY(${100 * (-slide) -1}%)`
        }
      );
      contentEl.forEach(
        (s, i) => {
          s.style.transform = `translateY(${100 * (-slide) -1}%)`
        }
      );
    }

    const activeSlide = function (slide, preSlide) {
        gotoTitle(slide)
        changeBackground(slide)
        for (let j = 0; j <tlLine.length; j++) {
            tlLine[j].classList.remove('active')
        }
        tlLine[curSlide].classList.add('active')
        slides[slide].classList.add('scale-2__animate')
        slides[slide].classList.add('scale-2')
        slides[preSlide].classList.add('scale-1__animate')
        slides[preSlide].classList.add('scale-1')
        slides[preSlide].classList.remove('scale-2__animate')
        slides[preSlide].classList.remove('scale-2')
        setTimeout(() => {
            slides[preSlide].classList.remove('scale-1__animate')
            slides[preSlide].classList.remove('scale-1')
        },500)
    }


    // Next slide
    const nextSlide = function () {
        let preSlide = curSlide;
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      slides[preSlide].classList.add('hidden__animate');
      
      setTimeout(() => {
          slides[preSlide].style.visibility = 'hidden';
        },200)
        setTimeout(() => {
          slides[preSlide].style.visibility = 'visible';
          slides[preSlide].classList.remove('hidden__animate')
        },1000)

      activeSlide(curSlide,preSlide)
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
        let preSlide = curSlide;
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }

      goToSlide(curSlide);
      activeSlide(curSlide,preSlide)
    };
  
    const init = function () {
        slides[0].classList.add('scale-2__animate')
        slides[0].classList.add('scale-2')
        goToSlide(0);
    };
    init()
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

  for (let i = 0; i < tlLine.length; i++) {
    tlLine[i].addEventListener('click', function (e) {  
        for (let j = 0; j <tlLine.length; j++) {
            tlLine[j].classList.remove('active')
        }
        tlLine[i].classList.add('active')
        curSlide = i;
        goToSlide(i);
      });
  }

};

// $(document).ready(() => {
//   const b = document.querySelector('.slide-item').classList.add('scale-2')

// })
  // slider();



// Chinh
const slider_ver2 = () => {
  const slides = $('.slide-item')
  $(slides[0]).addClass('active')
}

$(document).ready(() => {
  /* lang*/
  $(document).click( function(e) {
      $('.translate_wrapper, .more_lang').removeClass('active');     
  });

  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });

  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var img = $(this).find('img').attr('src');    
    var lang = $(this).attr('data-value');
    
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);
    if(lang == 'EN') {
      $('.vi').css({display: 'none'});
      $('.en').css({display: 'block'});
    } else {
      $('.vi').css({display: 'block'});
      $('.en').css({display: 'none'});
    }
  });
/* lang*/
  const toggleTooltip = $('#toggle')
  const slide_container = $('.slide-items')
  const slides = $('.slide-item')
  const tlLines = $('.tl__line')
  const tlTitle = $('.ttl-title')
  const discoverBtn = $('.discover--btn');
  let curSlide = 0;
  let clicked = false;
  

  const activeDot = (cur) => {
    // tlLines.eq(pre).removeClass('active');
    tlLines.removeClass('active')
    tlLines.eq(cur).addClass('active');
  }

  toggleTooltip.click(() => {
    toggleTooltip.toggleClass('on');
    tlTitle.toggleClass('active');
    $('.timeline').toggleClass('active');
  })
  
  const cursor = (el, cursor) => {
    for (i = 0; i < el.length; i++) {
      el[i].css({
        cursor: `${cursor}`
      })
    }
  }

  const switchInfo = (slide) => {
    document.body.style.cursor ="wait";

    cursor([slides,tlLines,$('#container'), $('.slider__btn--right'), $('.slider__btn--left')],"wait")

    clicked = true;
    discoverBtn.addClass('scale-0')
    $('.content-title').animate({opacity: 0}, 'fast', function() {
      $(this).slideUp('slow');
    });

    $('.content-desc').animate({opacity: 0}, 'fast', function() {
      $(this).slideUp('slow');
    });

    $(`.content-title:nth-child(${slide + 1})`).animate({opacity: 1}, 'slow', function() {
      $(this).slideDown('slow');
    });
    $(`.content-desc:nth-child(${slide + 1})`).animate({opacity: 1}, 'slow', function() {
      $(this).slideDown('slow');
    });
    setTimeout(() => {
      discoverBtn.removeClass('scale-0')
    },1500)
    setTimeout(() => { 
      clicked = false;
      cursor([slides,tlLines, $('.slider__btn--right'), $('.slider__btn--left')],"pointer");
      cursor([$('#container')],"default");
    },2000)
  }

  const nextSlide = (time=1000, changebg=true, activeTl=true) => {
    const currentSlide = $('.slide-item.active')
    currentSlide.addClass('slide-item-fade-out')
    currentSlide.next().addClass('active')

    if(activeTl) {
      curSlide = currentSlide.next().data('slide-id');
      activeDot(curSlide)
      switchInfo(curSlide)
    }

    if(changebg) {
      const bg_link = currentSlide.next().data('img-bg')
      $('#container').css({
        backgroundImage: `url("${bg_link}")`
      })
    }

    setTimeout(() => {
      currentSlide.removeClass('active')
      currentSlide.removeClass('slide-item-fade-out')
      slide_container.append(currentSlide)
    }, time)
  }

  const prevSlide = (time=1000, changebg=true, activeTl=true) => {

    const currentSlide = $('.slide-item.active')
    // currentSlide.addClass('slide-item-fade-out')
    const prevSlide = $('.slide-item:last-child')

    prevSlide.addClass('slide-item-fade-in')
    prevSlide.addClass('active')
    currentSlide.removeClass('active')  
    slide_container.prepend(prevSlide)

    if(activeTl) {
      curSlide = prevSlide.data('slide-id');
      activeDot(curSlide)
      switchInfo(curSlide)
    }
    if(changebg) {
      const bg_link = prevSlide.data('img-bg')
      $('#container').css({
        backgroundImage: `url("${bg_link}")`
      })
    }

    setTimeout(() => {
      prevSlide.removeClass('slide-item-fade-in')
      // slide_container.append(currentSlide)
    }, time)
  }

  const cardClickToActive = () => {
    slides.click(function(){
      if(clicked) {
        return false
      }
      nextSlide(1000)
    })
  }

  const dotClickToActive = () => {
    tlLines.click(function(){
      if(clicked) {
        return false
      }
      let inx = tlLines.index(this) 
      if(curSlide !== inx) {
        activeDot(inx)
        switchInfo(inx)
      }
        if(curSlide < inx) {
          backgroundTravelTime(inx - curSlide, 100, nextSlide, 1000 )
        } else if(curSlide > inx){
          backgroundTravelTime(curSlide - inx, 100, prevSlide, 1000 )
        }
        curSlide = inx;
    });
  }

  switchInfo(0);
  slider_ver2()

  dotClickToActive();
  cardClickToActive();
  $('.slider__btn--right').click(() => {
    if(clicked) {
      return false
    }
    nextSlide(1000)
  })
  $('.slider__btn--left').click(() => {
    if(clicked) {
      return false
    }
    prevSlide(1000)
  })
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' && !clicked) prevSlide(1000);
    (e.key === 'ArrowRight'&&!clicked) && nextSlide(1000);
  });

})

const backgroundTravelTime = function(times, second, callback, callbackParam = 1000) {
  let changeBg = false;
  let i = 0;    
  function timeLoop() {      
    setTimeout(function() {   
      changeBg = i === (times - 1) && true;
      callback(callbackParam,changeBg, false);
      i++;                   
      if (i < times) {        
        timeLoop();            
      }                       
    }, second)
  }
  timeLoop(); 
}
              

