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
  slider();


  