const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search input");
const display = document.querySelector(".display");
const weatherIcon = document.querySelector(".weather_icon");
const incorrectCity = document.querySelector(".incorrectCity p");
const placeholder_overlay = document.querySelector(".placeholder_overlay");

const apiKey = "c92b59c23cc99d80c604119d57127a98";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


const checkWether = async (cityName) => {
  try {
    const response = await fetch(
      apiUrl + `&q=${cityName}` + `&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.name) {
      city.textContent = data.name;
      temp.textContent = Math.round(data.main.temp) + "°c";
      humidity.textContent = Math.round(data.main.humidity) + "%";
      wind.textContent = data.wind.speed + " -km/h";
      display.style.display = "block";
      incorrectCity.style.display = "none";

      // weather Icon
      if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
      }
      else if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
      }
      else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
      }
      else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
      }
      else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png"
      }
      else{
        weatherIcon.src = "images/mist.png"
      }

      
    } else {
      display.style.display = "none";
      incorrectCity.style.display = "block";
    }
  } catch (error) {
    incorrectCity.style.display = "block";
    incorrectCity.textContent = "Internal server error!";
    incorrectCity.style.fontSize = "30px";
  }
};

searchBtn.addEventListener("click", () => {
  checkWether(searchInput.value);
});


// custom placeholder
searchInput.addEventListener("input",(e)=>{
  if(e.target.value){
    placeholder_overlay.style.display = "none"
  }else{
    placeholder_overlay.style.display = "block"
  }
})