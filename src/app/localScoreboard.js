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
        switch (str) {
          case "result rank-local":
            li.innerHTML = `${localLp}`;
            break;
          case "result name-local":
            li.innerHTML = `${value.name}`;
            break;
          case "result time-local":
            li.innerHTML = `${value.score}`;
            break;
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

 /*getLocalSores is a function to retrieve the data from LocalStorage and
 saveLocalScores is function to save the last score to LocalStorage and compare to
 the others */

export {getLocalScores, saveLocalScores, clearLocalScoreList};

