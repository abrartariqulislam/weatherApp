const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search input");
const display = document.querySelector(".display");
const incorrectCity = document.querySelector(".incorrectCity p");

const apiKey = "c92b59c23cc99d80c604119d57127a98";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

display.style.display = "none";
incorrectCity.style.display = "none";

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
      wind.textContent = Math.round(data.wind.speed) + " -km/h";
      display.style.display = "block";
      incorrectCity.style.display = "none";
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
