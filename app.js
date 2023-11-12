const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

const apiKey = "c92b59c23cc99d80c604119d57127a98"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kushtia"


const checkWether = async () =>{
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    const data = await response.json()
    city.textContent = data.name
    temp.textContent = Math.round(data.main.temp) + "°c"
    humidity.textContent = Math.round(data.main.humidity) + "%"
    wind.textContent = Math.round(data.wind.speed) + " -km/h"
}


checkWether()