import { ui } from "./ui";

class Quiz {
  constructor(category) {
    this.category = category;
    this.categories = [
      {name: "programming", quizes: [
        {
          question: "What is the best programming language?",
          answer1: "Python",
          answer2: "Java",
          answer3: "C",
          answer4: "JavaScript",
          correct: "a4"
        },
        {
          question: "What does the following state evaluate to? let result = '1' + 0 + 1",
          answer1: "2",
          answer2: "101",
          answer3: "10",
          answer4: "01",
          correct: "a2"
        },
        {
          question: "Which of the following is an array method?",
          answer1: "console.log",
          answer2: "document.write",
          answer3: "split",
          answer4: "join",
          correct: "a4"
        },
        {
          question: "Which of the following declares a constant?",
          answer1: "const result = 1",
          answer2: "const result",
          answer3: "let result",
          answer4: "let result = 1",
          correct: "a1"
        }
      ]},
      {name: "nutrition", quizes: [
        {
          question: "Which of the following is the healthiest fat source?",
          answer1: "peanut butter",
          answer2: "hazelnut butter",
          answer3: "tahini",
          answer4: "almond butter",
          correct: "a3"
        },
        {
          question: "Which of the following fats has the most omega-3",
          answer1: "chia seeds",
          answer2: "almonds",
          answer3: "walnuts",
          answer4: "peanuts",
          correct: "a1"
        },
        {
          question: "Which of the following carbohydrate sources does not contain gluten?",
          answer1: "rice",
          answer2: "pasta",
          answer3: "wheat",
          answer4: "tortillas",
          correct: "a1"
        },
        {
          question: "Which of the following has the most protein?",
          answer1: "lentils",
          answer2: "fava beans",
          answer3: "black beans",
          answer4: "chickpeas",
          correct: "a2"
        }
      ]},
      {name: "gym", quizes: [
        {
          question: "How much training frequency is the optimum for a natural athlete?",
          answer1: "Every day",
          answer2: "4-5 days",
          answer3: "2-3",
          answer4: "Never",
          correct: "a2"
        },
        {
          question: "What is the biggest muscle group?",
          answer1: "Back",
          answer2: "Legs",
          answer3: "Chest",
          answer4: "Arms",
          correct: "a2"
        },
        {
          question: "How many repetitions to build muscle endurance?",
          answer1: "1 max rep",
          answer2: "up to 6 reps",
          answer3: "8-12 reps",
          answer4: "15-30 reps",
          correct: "a4"
        },
        {
          question: "What is the best muscle group to train for testosterone production?",
          answer1: "chest",
          answer2: "shoulders",
          answer3: "legs",
          answer4: "arms",
          correct: "a3"
        }
      ]}
    ]
    this.quizes;
    this.quizIndex = 0;
    this.quiz;
    this.answers = [];
    this.correctAnswers = [];
    this.score = 0;
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
    if (this.quizIndex < 4) {
      this.quiz = this.quizes[this.quizIndex];
      ui.renderQuiz();
    } else {
      this.finish();
    }
  }
  setCorrectAnswers() {
    this.quizes.forEach(quiz => this.correctAnswers.push(quiz.correct));
  }
  setAnswer(answer) {
    this.answers.push(answer);

    this.quizIndex++;
    this.setQuiz();
  }
  calculateScore() {
    for (let i = 0; i < this.answers.length; i++) {
      this.score = this.answers[i] === this.correctAnswers[i] ? this.score + 1 : this.score;
    }
  }
  finish() {
    this.calculateScore();
    ui.renderEndScreen();
  }
}

export default Quiz;