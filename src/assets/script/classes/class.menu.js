export class Menu {
  #navBarItems;
  #appRoot;

  constructor(navBarItems, appRoot) {
    this.#navBarItems = navBarItems;
    this.#appRoot = appRoot;
    this.#init();
  }

  get navBarItems() {
    return this.#navBarItems;
  }

  set navBarItems(label) {
    this.#navBarItems = label;
  }

  get appRoot() {
    return this.#appRoot;
  }

  set appRoot(elm) {
    this.#appRoot = elm;
  }

  #init() {
    this.appRoot.innerHTML += this.#render();
  }

  #render() {
    return `<nav>
              <a href="${this.navBarItems[0].href}" class="button">${this.navBarItems[0].label}</a>
            </nav>`;
  }
}
