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