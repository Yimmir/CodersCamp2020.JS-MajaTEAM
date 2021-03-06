import {ulGlobDivs, saveGlobalSCores} from './globalScoreboard';
import {ulLocDivs,saveLocalScores} from './localScoreboard';

const compareScores = function(a, b) {
  return  a.score - b.score;
};

const clearScoresList = function() {
  ulGlobDivs.forEach(ul => ul.innerHTML ='');
  ulLocDivs.forEach(ul => ul.innerHTML ='');
};

const decorateScore = function(score) {
  if (score >= 60) {
    let x = Math.floor(score/60);
    let y = score%60;
    return y < 10 ? [x, '00'] : [x, y]
  } else {
    return  score < 10 ? [0, '00'] : [0, score]
  }
};

const saveScores = function(playerName, playerScore) {
  saveLocalScores(playerName,playerScore);
  saveGlobalSCores(playerName,playerScore)
};

export {compareScores, clearScoresList, decorateScore,saveScores}
