export const quizComponents = () => {
  const nrOfAnswers = 4;
  const app = document.querySelector('#swquiz-app');

  const quizContainer = document.createElement('div');
  quizContainer.className = "quiz-container";

  const questionImage = document.createElement('div');
  questionImage.className = "question-image"
  quizContainer.appendChild(questionImage);
  const answersContainer = document.createElement('div');
  answersContainer.className = "answers-container"
  quizContainer.appendChild(answersContainer);

  for (let i=0; i<nrOfAnswers; i++) {
    const answer = document.createElement('div');
    answer.className = 'answer';
    answersContainer.appendChild(answer);
  }

  app.appendChild(quizContainer)
}
