let globalScores = [];
const url = 'https://swquizzscoreboard123-default-rtdb.firebaseio.com/scores.json';


/*The function should return already formatted data -> JSON object should be first
 mapped to array of scores*/

const getGlobalScores = async function() {
   await fetchData();
   return globalScores
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
    .then(data => globalScores = data)
    .catch((error) => {
      console.error('Error: ', error)
    });
};


/*This functionalities is connected to retrieve global scores from database -> The DB is
 created on Google Firebase so it is not standalone service , It is only a storage for
  json files that you can create as You want without strick restriction of usuall
   API.  */

export {getGlobalScores, saveScoreGlobally};
