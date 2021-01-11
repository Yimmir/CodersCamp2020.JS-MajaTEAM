import {generateQuestion} from './questionGenerator';
import {getAvailableIDs} from './gameMode'
import {getRandomIntInclusive} from './random'

const questionElement = document.getElementsByClassName('question-image');
const answerElements = document.getElementsByClassName('answer');
let totalScore = 0;
let currentQuestionID = 0;
let questionCounter = 0;
let availableQuestionsIDs = [];
let possiblityToAnswer = false;  //used to prevent answering mulitple times the same question

export const startQuiz = (mode) => {
  totalScore = 0;
  questionCounter = 0;
  availableQuestionsIDs = [...getAvailableIDs(mode)]
  getQuestion(mode);
}

const getQuestion = async(mode) => {
  const questionIndex = getRandomIntInclusive(0, availableQuestionsIDs.length-1)
  console.log(++questionCounter);
  currentQuestionID = availableQuestionsIDs[questionIndex];
  availableQuestionsIDs.splice(questionIndex, 1);    //delete current question from the available question array
  await displayQuestion(currentQuestionID);
}

const displayQuestion = async(id) => {
  const question  = await generateQuestion(id);
  console.log(question)
  questionElement[0].style.backgroundImage = `url("data:image/png;base64,${question.questionImage}")`
  Array.from(answerElements).forEach((answer, index) => {
    answer.innerText = question.answers[index].content;
    if(question.answers[index].isCorrect) answer.dataset.type = "correct";
    else answer.dataset.type = "incorrect";
    answer.addEventListener('click', checkAnswer);
    possiblityToAnswer = true;
  });
}

const checkAnswer = (e) => {
  if (!possiblityToAnswer) return;
  possiblityToAnswer = false;
  const selectedAnswer = e.target;
  if (selectedAnswer.dataset.type === "correct") {
    totalScore++;
  }
  getQuestion();
}


