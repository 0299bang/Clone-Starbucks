const searchE1 = document.querySelector('.search');
const searchInputE1 = searchE1.querySelector('input');

searchE1.addEventListener('click', function (){
  // 로직
  searchInputE1.focus();
});

searchInputE1.addEventListener('focus', function () {
  searchE1.classList.add('focused');
  searchInputE1.setAttribute('placeholder', '통합검색');
});

searchInputE1.addEventListener('blur', function () {
  searchE1.classList.remove('focused');
  searchInputE1.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

// 함수과 너무 많이 실행되는 것을 방지하는 용도
// 화면이 스크롤 될때 실행되는 함수의 개수를 throttle라는 메소드 즉, 기능을 이용해서 일정시간에 한번 씩만 실행되도록 제한을 걸었다.
// _.throttle(함수, 시간)
// 시간은 밀리세컨드 단위
// gsap 라이브러리 많이 사용한다
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));


// 자동화 로직 만들어 주기, 반복적으로 처리하는 개념이 js 에서는 많다.
// 0.7 1.4 2.1 2.7
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEls, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});