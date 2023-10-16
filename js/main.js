const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//blur: focus와 반대되는 행위로 이로 인해 focus가 됐을 때만 focused class가 추가된다.
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEL = document.querySelector('header .badges');

// _.throttle(함수, 시간); 0.3초 단위로 부하를 준다.
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //badge 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        //badge 보이기
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    //autoplay: true,
    //loop: true
});
