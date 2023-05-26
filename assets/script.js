
const apiKey = 'de1bbc386e39ebaf5f3331ab62cf451e';
const fiveDaySectionEl = document.querySelector('#fivedays');

function displayWeather(data) {
  console.log(data)
  const { name } = data;
  const { temp, humidity } = data.main;
  const { wind } = data
  console.log(name, temp, humidity, wind)
  document.querySelector('#city').innerText = 'city-' + name;
  document.querySelector('#cTemp').innerText = 'Temp-' + temp + '°F';
  document.querySelector('#cWind').innerText = 'Wind-' + wind.speed + 'MPH';
  document.querySelector('#cHumid').innerText = 'Humidity-' + humidity + '%';
}


//-- 5 day weather fetch --//
function fetchFiveDayWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  ).then((Response) => Response.json())
    .then((data) => displayWeather(data));
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
  ).then((Response) => Response.json())
    .then((data) => displayFiveDayWeather(data.list));

};

function displayFiveDayWeather(weatherList) {
  for (var i = 4; i < weatherList.length; i += 8) {
    const dayWeather = weatherList[i];
    const date = dayjs(dayWeather.dt_txt).format('M/D/YYYY');
    const { temp, humidity } = dayWeather.main;
    const { speed } = dayWeather.wind;

    const cardEl = document.createElement('div');
    const ulEl = document.createElement('ul');
    cardEl.append(ulEl);
    const dateLi = document.createElement('li');
    dateLi.textContent = date;
    const tempLi = document.createElement('li');
    tempLi.textContent = temp +"°F";
    const windLi = document.createElement('li');
    windLi.textContent = speed + 'MPH';
    const humidLi = document.createElement('li');
    humidLi.textContent = humidity + '%';
    ulEl.append(dateLi, tempLi, windLi, humidLi);

    fiveDaySectionEl.append(cardEl);

  }

}









document.querySelector("#s-Btn").addEventListener('click', function () {
  const city = document.querySelector("#search-txt").value;
  //fetchWeather(city)
  fetchFiveDayWeather(city);
});





