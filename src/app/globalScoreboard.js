let globalScores = [];
let ulDivs = [document.querySelector(".rank-global"),
  document.querySelector(".name-global"),
  document.querySelector(".time-global")] ;
const url = 'https://swquizzscoreboard123-default-rtdb.firebaseio.com/scores.json';


/*The function should return already formatted data -> JSON object should be first
 mapped to array of scores*/



const getGlobalScores = async function() {
   await fetchData().then(() => {
     if(globalScores) {
       globalScores.sort(compareScores);
       let globalLp = 1;
       globalScores.forEach((value) => {
         ulDivs.forEach((value1) => {
           let li = document.createElement("li");
           let str = value1.className;
           switch (str) {
             case "result rank-global":
               li.innerHTML = `${globalLp}`;
               break;
             case "result name-global":
               li.innerHTML = `${value.name}`;
               break;
             case "result time-global":
               li.innerHTML = `${value.score}`;
               break;
           }
           value1.appendChild(li)
         });
         globalLp++
       })
     }

     }
   );
};

const saveScoreGlobally = async function(playerName, playerScore) {
  let body = {name: playerName, score: playerScore};
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then((data) => {
      console.log('SUCCESS: ', data);
    })
    .catch((error) => {
      console.error('Error: ', error)
    });
};

const fetchData = async function() {
  await fetch(url)
    .then(response => response.json())
    .then((data) => {
      globalScores = [];
      for (let obj in data) {
        globalScores.push(data[obj])
      }
    })
    .catch((error) => {
      console.error('Error: ', error)
    });
};

const compareScores = function(a, b) {
  return  a.score - b.score;
};

const clearGlobalScoreList = function() {
  ulDivs.forEach(ul => ul.innerHTML ='')
}


/*This functionalities is connected to retrieve global scores from database -> The DB is
 created on Google Firebase so it is not standalone service , It is only a storage for
  json files that you can create as You want without strick restriction of usuall
   API.  */

export {getGlobalScores, saveScoreGlobally, clearGlobalScoreList};
