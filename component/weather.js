const API_KEY = "73f3a7c92991adcee8b72c74b5d49a50";

function onGeoOk(position) {
  // Javascript의 props, 객체 데이터를 받아준다.
  const lat = position.coords.latitude; // 위도 정보 추출
  const lon = position.coords.longitude; // 경도 정보 추출
  //console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; // 날씨 정보를 받을수 있는 API 주소 형식

  // const logo_url = "";
  // const weatehrIcon = document.createElement("img");

  // console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.weather[0].main);
      console.log(data.weather[0].icon);

      const weather = document.getElementById("weather");
      const city = document.getElementById("city");
      const icon = document.getElementById("icon");

      city.innerText = `Your City: ${data.name}`;
      weather.innerText = `Today Weather: ${data.weather[0].main}`;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      // console.log(weather);
      // logo = "http://openweathermap.org/img/w/" + data.weather[0].icon;
      //console.log(logo);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // geolocation 함수를 통해서 현재 (위치 정보를 받아올 수 있음)
// weatehrIcon.src = `http://openweathermap.org/img/w/${}`;
// bgImage.classList.add("weatherIcon");
// document.body.appendChild(weatehrIcon);
