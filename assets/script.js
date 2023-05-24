var weather = {
  apiKey: 'de1bbc386e39ebaf5f3331ab62cf451e',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=city&units=imperial&appid=de1bbc386e39ebaf5f3331ab62cf451e'
    ).then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
const { name } = data;
const { temp, humidity } = data.main;
const { wind } = data.wind;
console.log(name,temp,humidity,wind)
document.querySelector('#city').innerText = name;
document.querySelector('#cTemp').innerText = temp + 'degrees symbolF';
document.querySelector('#cWind').innerText = wind;
document.querySelector('#cHumid').innerText = humidity;
  }



};



