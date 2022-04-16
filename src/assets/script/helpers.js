import { Weather } from "./classes/class.weather.js";

export function addButton(items) {
  let buttons = [];
  items.forEach((item) => {
    let a = document.createElement("a");
    a.innerText = item.label;
    a.setAttribute("href", item.href);
    a.classList.add("button");
    buttons.push(a);
  });
  return buttons;
}

export function addSound(name) {
  let audio = document.createElement("audio");
  let source = document.createElement("source");
  let src = `http://localhost:3000/audio/${name}.mp3`;
  source.setAttribute("src", src);
  source.setAttribute("type", "audio/mp3");
  audio.setAttribute("id", `${name}`);
  audio.appendChild(source);

  return audio;
}

export function randomStar(numberOfStars, appRoot) {
  const y = window.innerWidth;
  const x = window.innerHeight;

  for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement("div");
    let randomStarX = Math.floor(Math.random() * x);
    let randomStarY = Math.floor(Math.random() * y);
    let starPosition = [randomStarX, randomStarY];

    star.classList.add("stars");
    star.style.top = `${starPosition[0]}px`;
    star.style.left = `${starPosition[1]}px`;
    appRoot.appendChild(star);
  }
}

export function weatherLoc() {
  const rootElm = document.querySelector("header");
  const p = document.createElement("p");

  if (!navigator.geolocation) {
    p.textContent = "Geolocation indisponible sur votre navigateur";
    rootElm.appendChild(p);
  } else {
    navigator.geolocation.getCurrentPosition((pos) => {
      new Weather(pos.coords.latitude, pos.coords.longitude);
    });
  }
}
