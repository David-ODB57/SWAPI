import { getAllItems } from "./fetchers.js";
import { weatherLoc } from "./helpers.js";

const headers = new Headers();
let url = "/liste";
let options = {
  method: "GET",
  headers: headers,
  mode: "cors",
  cache: "default",
};

document.querySelector("body").style.overflow = "visible";
document.querySelector("#geolocalisation").addEventListener("click", (e) => {
  e.preventDefault();
  weatherLoc();
});
document.querySelector("#add-item").addEventListener("click", (e) => {
  e.preventDefault();
  location.href = `create.html`;
});

getAllItems(url, options);
