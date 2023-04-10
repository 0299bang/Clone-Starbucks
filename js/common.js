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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();