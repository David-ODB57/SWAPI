export const weathers = [
  {
    weather: "Thunderstorm",
    planetName: "Kamino",
    imgSrc: () => "http://localhost:3000/weather/kamino.png",
  },
  {
    weather: "Drizzle",
    planetName: "Kashyyyk",
    imgSrc: () => "http://localhost:3000/weather/kashyyyk.jpg",
  },
  {
    weather: "Rain",
    planetName: "Kamino",
    imgSrc: () => {
      let bckList = [
        "http://localhost:3000/weather/kamino.png",
        "http://localhost:3000/weather/rain.jpg",
      ];
      return bckList[Math.floor(Math.random() * 2)];
    },
  },
  {
    weather: "Snow",
    planetName: "Hoth",
    imgSrc: () => "http://localhost:3000/weather/hoth.jpg",
  },
  {
    weather: "Mist",
    planetName: "Dagobah",
    imgSrc: () => "http://localhost:3000/weather/dagobah.jpg",
  },
  {
    weather: "Smoke",
    planetName: "Balosar",
    imgSrc: () => "http://localhost:3000/weather/balosar.jpg",
  },
  {
    weather: "Haze",
    planetName: "Dagobah",
    imgSrc: () => "http://localhost:3000/weather/dagobah.jpg",
  },
  {
    weather: "Dust",
    planetName: "Tatooine",
    imgSrc: () => "http://localhost:3000/weather/tatooine.jpg",
  },
  {
    weather: "Fog",
    planetName: "Endor",
    imgSrc: () => "http://localhost:3000/weather/endor.jpg",
  },
  {
    weather: "Sand",
    planetName: "Tatooine",
    imgSrc: () => "http://localhost:3000/weather/tatooine.jpg",
  },
  {
    weather: "Ash",
    planetName: "Mustafar",
    imgSrc: () => "http://localhost:3000/weather/mustafar.jpg",
  },
  {
    weather: "Squall",
    planetName: "Kamino",
    imgSrc: () => "http://localhost:3000/weather/kamino.png",
  },
  {
    weather: "Tornado",
    planetName: "Geonosis",
    imgSrc: () => "http://localhost:3000/weather/geonosis.jpg",
  },
  {
    weather: "Clouds",
    planetName: "Bespin",
    imgSrc: () => "http://localhost:3000/weather/bespin.jpg",
  },
];
