import {loadDataFromAPI, loadImage} from './apiConnection'
import {getAvailableIDs} from './gameModes'
import {getRandomIntInclusive} from './random'

const imageURL = 'static/assets/img/modes'
const apiURL = 'https://swapi.dev/api'
const mode = 'starships';                     //for testing
const API = loadDataFromAPI(apiURL, mode);
const image = loadImage(imageURL, mode);

const getQuestionImage = async(id) => {
  return await image.byID(id);
}

const getCorrectAnswer = async(id) => {
  const data = await API.byID(id);
  return {content: data.name, isCorrect: true}
}

const getIncorrectAnswers = async(correctID) => {
  const availableAnswersIDs = [...getAvailableIDs(mode)];
  const answersIDs= [];
  let index;
  const correctIndex = availableAnswersIDs.indexOf(correctID);
  availableAnswersIDs.splice(correctIndex, 1);
  for (let i=0; i<3; i++) {
    index = getRandomIntInclusive(0, availableAnswersIDs.length-1)
    answersIDs.push(availableAnswersIDs[index]);
    availableAnswersIDs.splice(index, 1);
  }
  const incorrectAnswers = await Promise.all([...answersIDs].map(async id => {
    const data = await API.byID(id);
    return {content: data.name, isCorrect: false}
  }));
  return incorrectAnswers;
}
