import { getAllItems } from "./fetchers.js";
import { Weather } from "./classes/class.weather.js";

const headers = new Headers();
let url = "/liste";
let options = {
  method: "GET",
  headers: headers,
  mode: "cors",
  cache: "default",
};

document.querySelector("body").style.overflow = "visible";
document.querySelector("#add-item").addEventListener("click", (e) => {
  e.preventDefault();
  location.href = `create.html`;
});

getAllItems(url, options);

///////////////////////////////
// Configuration Weather App //
///////////////////////////////

// Test si la géolocation activé ou non sur le navigateur
// Utilise les coordonnées du lieu où se situe l'utilisateur
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      new Weather(pos.coords.latitude, pos.coords.longitude);
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert(error.message);
          break;
        case error.POSITION_UNAVAILABLE:
          alert(error.message);
          break;
        case error.TIMEOUT:
          alert(error.message);
          break;
      }
    },
    {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: true,
    }
  );
} else {
  alert("Veillez activer la géolocalisation afin d'afficher la météo");
}
