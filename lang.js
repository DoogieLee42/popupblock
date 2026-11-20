// 기기 언어가 한국어면 한국어, 아니면 영어. ?lang=ko / ?lang=en 으로 바꿀 수 있음
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var lang = q === 'ko' || q === 'en' ? q : ((navigator.language || '').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en');
  document.documentElement.lang = lang;
  document.addEventListener('DOMContentLoaded', function () {
    var a = document.getElementById('switch');
    if (a) { a.textContent = lang === 'ko' ? 'English' : '한국어'; a.href = '?lang=' + (lang === 'ko' ? 'en' : 'ko'); }
  });
})();
