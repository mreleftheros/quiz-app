import Quiz from "./quiz";

class UI {
  constructor() {
    this.container = document.getElementById("container");
    this.categories = document.getElementById("categories");
    this.startBtn = document.getElementById("startBtn");
    this.category;
  }
  init() {
    this.categories.addEventListener("click", e => this.selectCategory(e));
  }
  selectCategory(e) {
    if (!e.target.className.includes("category")) return; // check

    for (let child of this.categories.children) {
      child.classList.remove("active");
    }

    this.category = e.target.innerText.toLowerCase();
    e.target.classList.add("active");

    this.startBtn.classList.add("enabled");
    this.startBtn.addEventListener("click", () => {
      quiz = new Quiz(this.category);
      quiz.init();
    });
  }
}

const ui = new UI();
let quiz;

export { ui, quiz };