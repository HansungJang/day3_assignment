const clock = document.querySelector("h2#clock");

function getclock() {
  //시간, 날짜 요인을 받아오는 함수
  const date = new Date();
  //.padstart(숫자, 넣을 숫자); 2자리, 2자리가 아닌 경우 앞에 0dmf cnrk
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getclock();
// 1초 마다 함수를 반복 호출; (단위, mili-second)
setInterval(getclock, 1000);
