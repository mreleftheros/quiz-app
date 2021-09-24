import { ui } from "./ui";

class Quiz {
  constructor(category) {
    this.category = category;
    this.categories = [
      {name: "programming", quizes: [
        {
          question: "q1",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a1"
        },
        {
          question: "q2",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a2"
        },
        {
          question: "q3",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a3"
        },
        {
          question: "q4",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a4"
        }
      ]},
      {name: "nutrition", quizes: [
        {
          question: "q1",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a1"
        },
        {
          question: "q2",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a2"
        },
        {
          question: "q3",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a3"
        },
        {
          question: "q4",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a4"
        }
      ]},
      {name: "gym", quizes: [
        {
          question: "q1",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a1"
        },
        {
          question: "q2",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a2"
        },
        {
          question: "q3",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correct: "a3"
        },
        {
          question: "q4",
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
    this.score;
  }
  init() {
    this.setQuizes();
  }
  setQuizes() {
    this.quizes = this.categories.filter(category => category.name === this.category)[0].quizes;
  }
}

export default Quiz;