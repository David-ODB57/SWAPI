export class Card {
  #cardName;
  #imgUrl;

  constructor(cardName, imgUrl) {
    this.#cardName = cardName;
    this.#imgUrl = imgUrl;
  }

  get cardName() {
    return this.#cardName;
  }

  set cardName(name) {
    this.#cardName = name;
  }

  get imageUrl() {
    return this.#imgUrl;
  }

  set imageUrl(url) {
    this.#imgUrl = url;
  }

  render() {
    return `<div class="loader">
              <i class="fab fa-galactic-republic fa-spin fa-4x"></i>
            </div>
            <img src="${this.imageUrl}" alt="${this.cardName}" onload = "${this.isLoaded}">
            <div class="card-title">
              <h2>${this.cardName}</h2>
            </div>`;
  }
}
