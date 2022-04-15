import { Card } from "./classes/class.card.js";
import { Modal } from "./classes/class.modal.js";
import { addSound } from "./helpers.js";

/* ---------------------------------------- */
/*        GET LISTE OF ALL CHARACTERS       */
/* ---------------------------------------- */
export function getAllItems(url, options) {
  fetch(url, options)
    .then((rawResponse) => {
      if (rawResponse.ok) return rawResponse.json();
      return Promise.reject(rawResponse);
    })
    .then((response) => {
      response.forEach((character) => {
        let container = document.querySelector("#layout-grid-list");
        let div = document.createElement("div");

        div.classList.add("card");
        div.innerHTML = new Card(character.name, character.image).render();

        if (character.name === "r2-d2") {
          let audio = addSound("r2-d2");
          div.setAttribute("id", "card-r2-d2");
          div.appendChild(audio);
          div.addEventListener("mouseenter", () => {
            audio.load();
            audio.play();
          });
          div.addEventListener("mouseleave", () => {
            audio.pause();
          });
        }

        if (character.name === "Darth Vader") {
          let audio = addSound("vader");
          div.setAttribute("id", "card-vader");
          div.appendChild(audio);
          div.addEventListener("mouseenter", () => {
            audio.load();
            audio.play();
          });
          div.addEventListener("mouseleave", () => {
            audio.pause();
          });
        }

        if (character.name === "Chewbacca") {
          let audio = addSound("Chewbacca");
          div.setAttribute("id", "card-Chewbacca");
          div.appendChild(audio);
          div.addEventListener("mouseenter", () => {
            audio.load();
            audio.play();
          });
          div.addEventListener("mouseleave", () => {
            audio.pause();
          });
        }

        div.addEventListener("click", () => {
          for (const key in character) {
            if (Object.hasOwnProperty.call(character, key)) {
              sessionStorage.setItem(key, character[key]);
            }
          }
          location.href = `details.html`;
        });
        container.appendChild(div);
      });
    })
    .catch((err) => {
      console.log("Error fetch /liste", err);
      err.json().then((error) => {
        let modal = new Modal(error.message, err.success).render();
        document.querySelector("#section-content").innerHTML += modal;
        document.querySelector(".modal").addEventListener("click", (e) => {
          e.target.classList.add("modal-out");
          e.target.children[0].classList.add("out");
          location.href = "/";
        });
      });
    });
}

/* ------------------------------------ */
/*          GET ONE CHARACTER           */
/* ------------------------------------ */
export function getOneItem(url, options) {
  fetch(url, options)
    .then((rawResponse) => {
      if (rawResponse.ok) return rawResponse.json();
      return Promise.reject(rawResponse);
    })
    .then((response) => {
      const { id, name, image, ...infos } = response;
      const title = document.querySelector(".title");
      const container = document.createElement("div");
      const img = document.createElement("img");
      const contentContainer = document.createElement("div");
      const main = document.querySelector("#details");

      title.innerText = `${name}`;
      container.classList.add("container");
      contentContainer.classList.add("content-container");
      img.src = `${image}`;
      img.title = `${name}`;
      img.alt = `image de ${name}`;
      container.appendChild(img);
      main.appendChild(container);

      for (const info in infos) {
        if (Object.hasOwnProperty.call(infos, info)) {
          const content = document.createElement("div");
          const p = document.createElement("p");
          const field = document.createElement("span");
          const fieldValue = document.createElement("span");

          content.classList.add("content");
          field.classList.add("categorie");
          field.innerText = `${info}:`;
          fieldValue.classList.add("info");
          fieldValue.innerText = `${infos[info]}`;
          content.appendChild(field);
          content.appendChild(fieldValue);
          contentContainer.appendChild(content);
          container.appendChild(contentContainer);
        }
      }
    })
    .catch((err) => {
      console.log("Error fetch /liste/details", err);
      err.json().then((error) => {
        let modal = new Modal(error.message, err.success).render();
        document.querySelector("#section-content").innerHTML += modal;
        document.querySelector(".modal").addEventListener("click", (e) => {
          e.target.classList.add("modal-out");
          e.target.children[0].classList.add("out");
          location.href = "liste.html";
        });
      });
    });
}

/* --------------------------------------- */
/*          UPDATE ONE CHARACTER           */
/* --------------------------------------- */
export function updateOneItem(url, options) {
  fetch(url, options)
    .then((rawResponse) => {
      if (rawResponse.ok) return rawResponse.json();
      return Promise.reject(rawResponse);
    })
    .then((response) => {
      //Modal pour confirmer l'update
      let modal = new Modal(response.message, response.success).render();
      document.querySelector("#section-content").innerHTML += modal;
      document.querySelector(".modal").addEventListener("click", (e) => {
        e.target.classList.add("modal-out");
        e.target.children[0].classList.add("out");
        setTimeout(() => (location.href = "liste.html"), 1500);
      });
    })
    .catch((err) => {
      console.log("Error fetch /liste/update", err);
      err.json().then((error) => {
        let modal = new Modal(error.message, err.success).render();
        document.querySelector("#section-content").innerHTML += modal;
        document.querySelector(".modal").addEventListener("click", (e) => {
          e.target.classList.add("modal-out");
          e.target.children[0].classList.add("out");
          location.href = "details.html";
        });
      });
    });
}

/* ------------------------------------ */
/*          ADD ONE CHARACTER           */
/* ------------------------------------ */
export function addOneItem(url, options) {
  fetch(url, options)
    .then((rawResponse) => {
      if (rawResponse.ok) return rawResponse.json();
      return Promise.reject(rawResponse);
    })
    .then((response) => {
      let modal = new Modal(response.message, response.success).render();
      document.querySelector("#section-content").innerHTML += modal;
      document.querySelector(".modal").addEventListener("click", (e) => {
        e.target.classList.add("modal-out");
        e.target.children[0].classList.add("out");
        setTimeout(() => (location.href = "liste.html"), 1500);
      });
    })
    .catch((err) => {
      console.log("Error fetch /liste/create", err);
      err.json().then((error) => {
        let modal = new Modal(error.message, err.success).render();
        document.querySelector("#section-content").innerHTML += modal;
        document.querySelector(".modal").addEventListener("click", (e) => {
          e.target.classList.add("modal-out");
          e.target.children[0].classList.add("out");
          location.href = "create.html";
        });
      });
    });
}

/* --------------------------------------- */
/*          DELETE ONE CHARACTER           */
/* --------------------------------------- */
export function deleteItem(url, options) {
  fetch(url, options)
    .then((rawResponse) => {
      if (rawResponse.ok) return rawResponse.json();
      return Promise.reject(rawResponse);
    })
    .then((response) => {
      let modal = new Modal(response.message, response.success).render();
      document.querySelector("#section-content").innerHTML += modal;
      document.querySelector(".modal").addEventListener("click", (e) => {
        e.target.classList.add("modal-out");
        e.target.children[0].classList.add("out");
        setTimeout(() => (location.href = "liste.html"), 1500);
      });
    })
    .catch((err) => {
      console.log("Error fetch /liste/delete", err);
      err.json().then((error) => {
        let modal = new Modal(error.message, err.success).render();
        document.querySelector("#section-content").innerHTML += modal;
        document.querySelector(".modal").addEventListener("click", (e) => {
          e.target.classList.add("modal-out");
          e.target.children[0].classList.add("out");
          location.href = "details.html";
        });
      });
    });
}
