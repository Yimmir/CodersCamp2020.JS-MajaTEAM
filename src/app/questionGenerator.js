import {getRandomIntInclusive} from './random';

export const generateQuestion = async(mode, id) => {
  const questionImage = await getQuestionImage(mode, id);
  const correctAnswer = await getCorrectAnswer(mode,id);
  const incorrectAnswers = await getIncorrectAnswers(mode,id);
  const answers = incorrectAnswers;
  const randomIndex = getRandomIntInclusive(0, 3);
  answers.splice(randomIndex, 0, correctAnswer);
  return {questionImage, answers};
}

const getQuestionImage = async(mode, id) => {
  return await mode.imageURL.byID(id);
}

const getCorrectAnswer = async(mode, id) => {
  const data = await mode.apiURL.byID(id);
  return {content: data.name, isCorrect: true};
}

const getIncorrectAnswers = async(mode, correctID) => {
  const availableAnswersIDs = [...mode.availableIDs];
  const answersIDs= [];
  let index;
  const correctIndex = availableAnswersIDs.indexOf(correctID);
  availableAnswersIDs.splice(correctIndex, 1);
  for (let i=0; i<3; i++) {
    index = getRandomIntInclusive(0, availableAnswersIDs.length-1);
    answersIDs.push(availableAnswersIDs[index]);
    availableAnswersIDs.splice(index, 1);
  }
  const incorrectAnswers = await Promise.all([...answersIDs].map(async id => {
    const data = await mode.apiURL.byID(id);
    return {content: data.name, isCorrect: false};
  }));
  return incorrectAnswers;
}
