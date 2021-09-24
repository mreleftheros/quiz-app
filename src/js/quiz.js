import { ui } from "./ui";

class Quiz {
  constructor(category) {
    this.category = category;
    this.categories = [
      {name: "programming", quizes: [
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a1"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a2"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a3"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a4"
        }
      ]},
      {name: "nutrition", quizes: [
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a1"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a2"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a3"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a4"
        }
      ]},
      {name: "gym", quizes: [
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a1"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a2"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a3"
        },
        {
          question: "q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a4"
        }
      ]}
    ]
    this.quizes;
    this.quizIndex = 0;
    this.quiz;
    this.answers = [];
    this.correctAnswers = [];
    this.score;
  }
  init() {
    this.setQuizes();
    this.setQuiz();
    this.setCorrectAnswers();
  }
  setQuizes() {
    this.quizes = this.categories.filter(category => category.name === this.category)[0].quizes;
  }
  setQuiz() {
    this.quiz = this.quizes[this.quizIndex];
    ui.renderQuiz();
  }
  setCorrectAnswers() {
    this.quizes.forEach(quiz => this.correctAnswers.push(quiz.correct));
  }
  setAnswer(answer) {
    this.answers.push(answer);
  }
}

export default Quiz;