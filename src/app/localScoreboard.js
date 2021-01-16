let localScores = [];
let ulDivs = [document.querySelector(".rank-local"),
  document.querySelector(".name-local"),
  document.querySelector(".time-local")] ;

const getLocalScores = function() {
  localScores = JSON.parse(localStorage.getItem("scores")) || [];
  if(localScores) {
    let localLp = 1;
    localScores.forEach((value) => {
      ulDivs.forEach((value1) => {
        let li = document.createElement("li");
        let str = value1.className;
        if (str.includes("rank-local")) {
          li.innerHTML = `${localLp}`;
        } else if (str.includes("name-local")) {
          li.innerHTML = `${value.name}`;
        } else {
          let score = decorateScore(value.score);
          li.innerHTML = `${score[0]}:${score[1]}`;
        }
        value1.appendChild(li)
      });
      localLp++
    })
  }
};

const saveLocalScores = function(playerName, playerScore) {
  localScores = JSON.parse(localStorage.getItem("scores")) || [];
  let fetchedScores = localScores;
  fetchedScores.push({name: playerName, score: playerScore});
  localStorage.setItem("scores", JSON.stringify(sortLocalScores(fetchedScores)));
};

const sortLocalScores = function(scores) {
  return scores.sort(compareScores).slice(0,3);
};

const compareScores = function(a, b) {
  return  a.score - b.score;
};

const clearLocalScoreList = function() {
  ulDivs.forEach(ul => ul.innerHTML ='')
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

 /*getLocalSores is a function to retrieve the data from LocalStorage and
 saveLocalScores is function to save the last score to LocalStorage and compare to
 the others */

export {getLocalScores, saveLocalScores, clearLocalScoreList, decorateScore};

