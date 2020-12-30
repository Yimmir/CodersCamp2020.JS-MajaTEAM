let localScores = [];

const getLocalScores = function() {
  localScores = JSON.parse(localStorage.getItem("scores")) || [];
  return localScores;
};

const saveLocalScores = function(playerName, playerScore) {
  let fetchedScores = getLocalScores();
  fetchedScores.push({name: playerName, score: playerScore});
  localStorage.setItem("scores", JSON.stringify(sortLocalScores(fetchedScores)));
};

const sortLocalScores = function(scores) {
  return scores.sort(compareScores).slice(0,3);
};

const compareScores = function(a, b) {
  return  b.score - a.score;
};

 /*getLocalSores is a function to retrieve the data from LocalStorage and
 saveLocalScores is function to save the last score to LocalStorage and compare to
 the others */

export {getLocalScores, saveLocalScores};

