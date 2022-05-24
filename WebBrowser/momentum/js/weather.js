const API_KEY = "f9a67885081843ca709501d7336b2bbc";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${lat} ${lng}`);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / temp is ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=goyang&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / temp is ${data.main.temp}`;
    });
}

// 현재 좌표값 불러오기
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
