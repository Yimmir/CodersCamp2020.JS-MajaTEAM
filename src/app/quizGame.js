import {generateQuestion} from './questionGenerator';
import {getModeProperties} from './gameMode';
import {getRandomIntInclusive} from './random';

const mode = getModeProperties('starships');
const questionElement = document.getElementById('quizImage');
const answerElements = document.getElementsByClassName('answer');
let totalScore = 0;
let currentQuestionID = 0;
let questionCounter = 0;
let availableQuestionsIDs = [];
let possiblityToAnswer = false;  //used to prevent answering mulitple times the same question
let classToApply;

export const startQuiz = () => {
  totalScore = 0;
  questionCounter = 0;
  availableQuestionsIDs = [...mode.availableIDs];
  getQuestion();
}

const getQuestion = async() => {
  if(availableQuestionsIDs.length === 0) availableQuestionsIDs = [...mode.availableIDs];  //reload all questions when over
  const questionIndex = getRandomIntInclusive(0, availableQuestionsIDs.length-1);
  ++questionCounter;
  // console.log("Question nr:" + questionCounter);
  currentQuestionID = availableQuestionsIDs[questionIndex];
  availableQuestionsIDs.splice(questionIndex, 1);    //delete current question from the available question array
  await displayQuestion(currentQuestionID);
}

const displayQuestion = async(id) => {
  const question  = await generateQuestion(mode, id);
  // console.log(question.answers);
  questionElement.src = `data:image/png;base64,${question.questionImage}`;
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
    classToApply = "correct";
  }
  else {
    classToApply = "incorrect";
  }
  // console.log("Total score: " + totalScore);
  selectedAnswer.classList.add(classToApply);
  setTimeout(() => {
    getQuestion();
    selectedAnswer.classList.remove(classToApply);
  }, 300);
  
}


