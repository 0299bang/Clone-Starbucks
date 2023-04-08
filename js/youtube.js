// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// onYouTubeIframeAPIReady = 함수의 이름
// 외부에서 가져온 유튜브를 제어해주는 js라이브러리가 자체적으로 함수의 이름을 찾기 때문에 이름 변경 no!!
// https://www.youtube.com/watch?v=An6LvWQuj_8&t=111s
// ?v='id'&t=, videoId: 'id'
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',  // 최초 재생할 유브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8'  // 반복 재생할 유튜브 영상 ID 목록
    },
    // 영상이 준비가 되면(onReady)익명의 함수 하나가 실행,
    // 익명의 함수가 실행될때 준비된 영상을 음소거처리 하겠다.
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}