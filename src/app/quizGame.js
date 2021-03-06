import {generateQuestion} from './questionGenerator';
import {getRandomIntInclusive} from './random';
import {player} from './player';
import { timer } from "./timer.js";
import { playTime } from './difficulty';

const MAX_POINTS = 20;

const questionElement = document.getElementById('quizImage');
const answerElements = document.getElementsByClassName('answer');
const loaderQ = document.getElementById('quiz-loader');
const quizWrapper = document.getElementById('quiz-wrapper');
let currentQuestionID = 0;
let availableQuestionsIDs = [];
let possiblityToAnswer = false;  //used to prevent answering mulitple times the same question

export const startQuiz = (mode) => {
  player.correctAnswersInfo = 0;
  availableQuestionsIDs = [...mode.availableIDs];
  let answerBoxes = document.querySelectorAll(".answer")
  for (let i = 0; i < answerBoxes.length; i++) {
    answerBoxes[i].classList.remove("correct","incorrect","no-hover");
  }
  getQuestion(mode);
  timer(playTime);
  for (let i = 0; i < answerElements; i++) {
    answerElements[i].classList.remove('correct','incorrect');
  }
  // timer(player.correctAnswer);

}

const getQuestion = async(mode) => {
  if(availableQuestionsIDs.length === 0) availableQuestionsIDs = [...mode.availableIDs];  //reload all questions when over
  const questionIndex = getRandomIntInclusive(0, availableQuestionsIDs.length-1);
  currentQuestionID = availableQuestionsIDs[questionIndex];
  availableQuestionsIDs.splice(questionIndex, 1);    //delete current question from the available question array
  //quizWrapper.style.display = 'none'; Will be added to the first question only
  //loaderQ.style.display = 'block';
  await displayQuestion(mode, currentQuestionID);
  //quizWrapper.style.display = 'flex';
 // loaderQ.style.display = 'none';
};

const displayQuestion = async(mode, id) => {
  const question  = await generateQuestion(mode, id);
  // console.log(question.answers);
  questionElement.src = `data:image/png;base64,${question.questionImage}`;
  Array.from(answerElements).forEach((answer, index) => {
    answer.innerText = question.answers[index].content;
    if(question.answers[index].isCorrect) answer.dataset.type = "correct";
    else answer.dataset.type = "incorrect";
    possiblityToAnswer = true;
  });
}

export const checkAnswer = (mode, e) => {
  let classToApply;
  const noHoverClass = 'no-hover';
  if (!possiblityToAnswer) return;
  possiblityToAnswer = false;
  const selectedAnswer = e.target;
  if (selectedAnswer.dataset.type === "correct") {
    player.correctAnswersInfo++;
    classToApply = "correct";
  }
  else {
    classToApply = "incorrect";
  }
  // console.log("Total score: " + player.correctAnswersInfo);
  selectedAnswer.classList.add(classToApply);
  selectedAnswer.classList.add(noHoverClass)
  setTimeout(() => {
    if(player.correctAnswersInfo < MAX_POINTS) getQuestion(mode);
    else return;      //later should display scoreboard
    selectedAnswer.classList.remove(classToApply);
    selectedAnswer.classList.remove(noHoverClass);
  }, 300);
  
}


