export class Modal {
  #message;
  #success;

  constructor(message, success) {
    this.#message = message;
    this.#success = success;
  }

  get message() {
    return this.#message;
  }

  set message(str) {
    this.#message = str;
  }

  get success() {
    return this.#success ? "success" : "fail";
    // return "fail";
  }

  set success(bool) {
    this.#success = bool;
  }

  render() {
    return `
        <div class="modal">
          <span class="message ${this.success}">${this.message}</span>
        </div>`;
  }
}
