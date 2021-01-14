import { player } from "./player.js";
import {getLocalScores} from  "./localScoreboard"

export const App = ({options}) => {

const divStart = document.getElementById("div-start");
const divPlay = document.getElementById("div-play");
const divMenu = document.getElementById("div-menu");
const divCategories = document.getElementById("div-categories");
const divScores = document.getElementById("div-highScores");
const divScoresLocalList = document.querySelector(".scoresListLocal");
const divScoresGlobalList = document.querySelector(".scoresListGlobal");

const btnPlay = document.getElementById("button-play");
const btnNext = document.getElementById("button-next");
const btnStart = document.getElementById("button-start");
const btnHighScores = document.getElementById("button-highscores");
const btnHighScoresBack = document.getElementById("button-back");

btnPlay.addEventListener('click', () => {
    divPlay.style.display = "none";
    divStart.style.display = "block";
})

btnNext.addEventListener('click', () => {
    const userNickname = document.getElementById("nickname").value;
    if (userNickname.length >= 3) {
        player.playerName = userNickname;
        divStart.style.display = "none";
        divMenu.style.display = "block";
    } else {
        alert('Name to short!')
    }
})

btnStart.addEventListener('click', () => {
    divMenu.style.display = "none";
    divCategories.style.display = "block";
});

btnHighScores.addEventListener('click', () => {
    divMenu.style.display = "none";
    divScores.style.display = "block";
    let  scores = getLocalScores();
    let lp =0;
    scores.forEach((value) => {
         console.log(value.name);
         let li = document.createElement("li");
         li.appendChild(document.createTextNode(`${lp}. ${value.name} ${value.score}`));
        divScoresLocalList.appendChild(li);
         lp++;
     });
    console.log(scores);
    })

    btnHighScoresBack.addEventListener('click', () => {
        divMenu.style.display = "block";
        divScores.style.display = "none";
        divScoresLocalList.innerHTML = '';
        divScoresGlobalList.innerHTML = '';
    })

}


