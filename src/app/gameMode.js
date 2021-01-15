import {loadDataFromAPI, loadImage} from './apiConnection';

const PEOPLE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83];
const STARSHIPS_IDS = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];
const VEHICLES_IDS = [4, 6, 7, 8, 14, 16, 18, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];

const imageBaseURL = 'static/assets/img/modes';
const apiBaseURL = 'https://swapi.dev/api';

const questionTextElement = document.getElementById("questionText");

export const getModeProperties = (selectedMode) => {
  let modeName, availableIDs, apiURL, imageURL, questionText;
  switch (selectedMode) {
    case 0:
      modeName = "people";
      availableIDs = PEOPLE_IDS;
      questionText = "Who is the character?"
      break;
    case 1:
      modeName = "vehicles";
      availableIDs = VEHICLES_IDS;
      questionText = "Do you recognize this vehicle?"
      break;
    case 2:
      modeName = "starships";
      availableIDs = STARSHIPS_IDS;
      questionText = "Do you recognize this starship?"
      break;
    default:
      console.log("Wrong mode")
  }
  questionTextElement.innerText = questionText;
  apiURL = loadDataFromAPI(apiBaseURL, modeName);
  imageURL = loadImage(imageBaseURL, modeName);
  return {availableIDs, apiURL, imageURL};
}