import { decorateScore,compareScores } from './scoreboardService';

const loader = document.getElementById('highScoresLoader');
let globalScores = [];
let ulGlobDivs = [document.querySelector('.rank-global'),
  document.querySelector('.name-global'),
  document.querySelector('.time-global')];
const url = 'https://swquizzscoreboard123-default-rtdb.firebaseio.com/scores.json';

/*The function should return already formatted data -> JSON object should be first
 mapped to array of scores*/

const createList = function() {
  if (globalScores) {
    globalScores.sort(compareScores);
    console.log("clicked");
    let globalLp = 1;
    globalScores.forEach((value) => {
      ulGlobDivs.forEach((value1) => {
        let li = document.createElement('li');
        let str = value1.className;
        if (str.includes('rank-global')) {
          li.innerHTML = `${globalLp}`;
        } else if (str.includes('name-global')) {
          li.innerHTML = `${value.name}`;
        } else {
          let score = decorateScore(value.score);
          li.innerHTML = `${score[0]}:${score[1]}`;
        }
        value1.appendChild(li);
      });
      globalLp++;
    });
  }
};

const saveGlobalSCores = function(playerName, playerScore) {
  let body = { name: playerName, score: playerScore };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then((data) => {
      console.log('SUCCESS: ', data);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
};

const getGlobalScores = function() {
  loader.style.display = 'block';
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      globalScores = [];
      for (let obj in data) {
        globalScores.push(data[obj]);
      }
      createList();
      loader.style.display = 'none';
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
};


/*This functionalities is connected to retrieve global scores from database -> The DB is
 created on Google Firebase so it is not standalone service , It is only a storage for
  json files that you can create as You want without strick restriction of usuall
   API.  */

export { getGlobalScores, saveGlobalSCores, ulGlobDivs};
