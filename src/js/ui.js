import Quiz from "./quiz";

class UI {
  constructor() {
    this.container = document.getElementById("container");
    this.categories = document.getElementById("categories");
    this.startBtn = document.getElementById("startBtn");
    this.category;
    this.answers;
    this.submitBtn;
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
  renderQuiz() {
    const {question, answer1, answer2, answer3, answer4, correct} = quiz.quiz;

    let html = `
      <p class="main__app__question">${question}</p>
      <div class="main__app__answers" id="answers">
        <button type="button" data-answer="a1" class="main__app__answers__answer secondary-btn">
          <span>${answer1}</span>
        </button>
        <button type="button" data-answer="a2" class="main__app__answers__answer secondary-btn">
          <span>${answer2}</span>
        </button>
        <button type="button" data-answer="a3" class="main__app__answers__answer secondary-btn">
          <span>${answer3}</span>
        </button>
        <button type="button" data-answer="a4" class="main__app__answers__answer secondary-btn">
          <span>${answer4}</span>
        </button>
      </div>
      <button type="button" class="main__app__btn primary-btn">
        <span>Next</span>
      </button>
    `;
    
    this.container.innerHTML = html;

    this.answers = document.getElementById("answers");
    
    this.answers.addEventListener("click", e => this.selectAnswer(e));
  }
  selectAnswer(e) {
    if (!e.target.className.includes("main__app__answers__answer")) return; // check
    
    for (let child of this.answers.children) {
      child.classList.remove("active");
    }
    
    e.target.classList.add("active");

    this.submitBtn = document.querySelector(".main__app__btn");
    this.submitBtn.classList.add("enabled");
    this.submitBtn.addEventListener("click", e => this.submitAnswer(e));
  }
  submitAnswer(e) {
    let answer = e.target.getAttribute("data-answer");
    quiz.setAnswer(answer);
  }
}

const ui = new UI();
let quiz;

export { ui, quiz };