import { updateOneItem } from "./fetchers.js";

const inputs = document.querySelectorAll(".input");
let charId = sessionStorage.getItem("id");
let url = `/liste/${charId}`;
let headers = new Headers();
let options = {
  method: "GET",
  headers: headers,
  mode: "cors",
  cache: "default",
};

let formData = {};

document.querySelector("body").style.overflow = "visible";

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
  });
});

fetch(url, options)
  .then((rawResponse) => {
    if (rawResponse.ok) return rawResponse.json();
    return Promise.reject(rawResponse);
  })
  .then((response) => {
    const { id, ...data } = response;

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let input = document.querySelector(`#${key}`);
        let value = data[key];
        if (value.trim().length !== 0 && value) input.value = value;
      }
    }
  })
  .catch((err) => console.log("Error fetch /liste/update", err));

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  headers.append("Content-Type", "application/json");
  let options = {
    method: "PUT",
    headers: headers,
    mode: "cors",
    cache: "default",
    body: JSON.stringify(formData),
  };
  updateOneItem(url, options);
});
