class UI {
  constructor() {
    this.categories = document.getElementById("categories");
  }
  init() {
    this.categories.addEventListener("click", e => this.chooseCategory(e));
  }
  chooseCategory(e) {
    if (!e.target.className.includes("category")) return; // check

    for (let child of this.categories.children) {
      child.classList.remove("active");
    }

    e.target.classList.add("active");
  }
}

export default new UI();