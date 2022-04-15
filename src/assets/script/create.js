import { addOneItem } from "./fetchers.js";

const form = document.querySelector("#create-form");

document.querySelector("body").style.overflow = "visible";

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const newCharacter = {};
  new FormData(form).forEach((value, key) => (newCharacter[key] = value));
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  let url = "/liste";
  let options = {
    method: "POST",
    headers: headers,
    mode: "cors",
    cache: "default",
    body: JSON.stringify(newCharacter),
  };
  addOneItem(url, options);
});
