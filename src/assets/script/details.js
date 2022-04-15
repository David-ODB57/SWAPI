import { deleteItem, getOneItem } from "./fetchers.js";

let headers = new Headers();
let charId = sessionStorage.getItem("id");
let url = `/liste/${charId}`;
let getOptions = {
  method: "GET",
  headers: headers,
  mode: "cors",
  cache: "default",
};
let deleteOptions = {
  method: "DELETE",
  headers: headers,
  mode: "cors",
  cache: "default",
};

document.querySelector("body").style.overflow = "visible";

document.querySelector("#update-item").addEventListener("click", (e) => {
  e.preventDefault();
  location.href = `update.html`;
});

document.querySelector("#remove-item").addEventListener("click", (e) => {
  e.preventDefault();
  deleteItem(url, deleteOptions);
});

getOneItem(url, getOptions);
