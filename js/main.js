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
const toTopEl = document.querySelector('#to-top');

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
    // 버튼 보이기, arrow_upward
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기, arrow_upward
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));

// ScrollToPlugin
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo:0
  });
})


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

// 스와이퍼 슬라이드
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay:5000  // 5초 자동 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
// 스와잎퍼 슬라이드, 다중 요소 슬라이드
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView:5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



// 도큐먼트 객체에서 쿼리셀렉터 메소드를 통해서, 프로모션 이름의 클래스를 찾아서, 프로모션 엘리먼트에 할당
const promotionEl = document.querySelector('.promotion');
// 프로모션토글을 선택하면 프로모션이 열리거나 닫히도록
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 프로모션 영역이 숨겨져 있니?
let isHidePromotion = false;
// 프로모션 토클 버튼을 클릭하면 함수가 실행된다
promotionToggleBtn.addEventListener('click', function () {
  // '!'=반대값을반환, false<->true
  // 어떤 특정 변수의 값을 지속적으로 반대 값으로 전환
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});
// 자바스크립트 자체로 요소의 보이고 안보이는 것을 직접 제어하는 것 보다는
// 클래스만 간단하게 추가하고 빼는 역할들을 통해서
// 보이고 안보이는 등의 간단한 애니메이션은 css로 제어하는 것이 좋다.
// 상단에 gsap 라이브러리 같은 경우는 css만 가지고 한계가 있는 것.


// 스타벅스 예제 깃허브 참고, 랜덤 함수
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,           // 선택자
    random(1.5, 2.5),   // 애니메이션 동작 시간
    {
      // 옵션
      y: size,          // y축
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,   // greensock, Easing, power1, easeInOut
      delay: random(0, delay)   // 지연시간 설정
    }
  )
}
// 밑에 값들을 위에 delay, size가 받아서, 애니메이션을 처리해주는 라이브러리에 적용해준다
floatingObject('.floating1', 1, 15);
floatingObject('.floating1', .5, 15);
floatingObject('.floating1', 1.5, 20);


// ScrollMagic
// -s 요소 들!!, 요소가 화면에 보여짐 여부에 따른 요소 관리
// croll-spy 라는 클래스가 html에 있어야 한다
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8        // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show')        // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller())  // 컨트롤러에 장면을 할당(필수!)
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();