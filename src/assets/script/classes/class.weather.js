import { weathers } from "../weatherList.js";

export class Weather {
  #lat;
  #long;

  constructor(lat, long) {
    this.#lat = lat;
    this.#long = long;
    this.#location(this.#lat, this.#long);
  }

  get latitude() {
    return this.#lat;
  }

  set latitude(value) {
    this.#lat = value;
  }

  get longitude() {
    return this.#long;
  }

  set longitude(value) {
    this.#long = value;
  }

  #location(lat, long) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=fr&appid=180aa9da1467549c9761e5a9a2daad88`
    )
      .then((response) => response.json())
      .then((result) => {
        document.querySelector("header").innerHTML += this.#render(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  #render(data) {
    let main = data.weather[0].main;
    let temp = Math.floor(data.main.temp);
    let info = data.weather[0].description;
    let image;
    let planetName;

    if (main === "Clear") {
      if (temp > 20 && temp < 30) {
        planetName = "Coruscant";
        let time = new Date().getHours();

        time > 18
          ? (image = `<img id="bck" src="http://localhost:3000/weather/coruscant-night.jpg" alt="${planetName} par nuit claire" />`)
          : (image = `<img id="bck" src="http://localhost:3000/weather/coruscant-day.jpg" alt="${planetName} par jour clair" />`);
      }
    } else {
      planetName = "Naboo";
      image = `<img id="bck" src="http://localhost:3000/weather/naboo.jpg" alt="image de ${planetName}" />`;
    }

    if (temp > 40) {
      info = "Caniculaire comme l'enfer !";
      image = `<img id="bck" src="http://localhost:3000/weather/mustafar.jpg" alt="image de Mustafar" />`;
      planetName = "Mustafar";
    } else {
      weathers.forEach((planet) => {
        if (planet.weather === main) {
          image = `<img id="bck" src="${planet.imgSrc()}" alt="image de ${
            planet.planetName
          }" />`;
          planetName = planet.planetName;
        }
      });
    }

    return `<div class="weather-app">
                <div class="image-container">${image}</div>
                <div class="main-container">
                    <div class="text-wrapper">
                        <p id="temp">${temp}°C</p>
                        <div>
                            <p id="info">C'est ${info}, comme sur</p>
                            <p id="planet-name">${planetName}</p>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}
