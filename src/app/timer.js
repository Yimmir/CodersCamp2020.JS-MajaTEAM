import {player} from './player';
import {saveScores, decorateScore} from './scoreboardService';

const timer = (timeSelected) => {
    let position = 0;
    let time = timeSelected
    const step = 100 / time;
    const ships = document.documentElement;
    const interval = setInterval(countdown, 1000);
    const divQuiz = document.getElementById("div-quiz");
    const timeOutput = document.getElementById("playerTime");
    const pointsOutput = document.getElementById("playerPoints");
    const divWin = document.getElementById("div-win");
    const divLose = document.getElementById("div-lose");
    const winText =document.getElementById("winText");
    const winTime =document.getElementById("winTime");
    const winMenu =document.getElementById("winMenu");
    const loseText =document.getElementById("loseText");
    const loseTime =document.getElementById("loseTime");
    const loseMenu =document.getElementById("loseMenu");
    const btnHome = document.getElementById("home");

    const endVisible = document.querySelectorAll(".visible-block");
    for (let i = 0; i < endVisible.length; i++) {
        endVisible[i].classList.remove("visible-block");
    }

    function countdown() {
        let score = player.correctAnswersInfo;
        ships.style.setProperty('--playerPosition', `${score * 5}%`);
        ships.style.setProperty('--enemyPosition', `${position}%`);
        if (divQuiz.style.display == "flex") {
            if (score < 20 && time > 0) {
                position += step;
                time--;
            } else if (score >= 20) {
                clearInterval(interval);
                player.scoreInfo = timeSelected - time;
                saveScores(player.playerName, player.scoreInfo);
                playerWon(player.scoreInfo);
            } else {
                clearInterval(interval);
                playerLost(score);
            }
        } else {
            clearInterval(interval);
        }
        

        position = position > 100 ? 100 : position;
    }

    function playerWon (playerTime) {
        divQuiz.style.display = "none";
        btnHome.style.display = "none";
        let score = decorateScore(playerTime);
        timeOutput.innerText = `${score[0]} : ${score[1]} sec`;
        //timeOutput.innerText = `${decorateScore(playerTime)}`;
        divWin.style.display = "flex"
        winText.classList.add("visible-block");
        setTimeout(() => { winTime.classList.add("visible-block")}, 3000);
        setTimeout(() => { winMenu.classList.add("visible-block")}, 4000);
    }

    function playerLost (playerScore) {
        divQuiz.style.display = "none";
        btnHome.style.display = "none";
        if (playerScore === 1) {
            pointsOutput.innerText = `${playerScore} point`;
        } else {
            pointsOutput.innerText = `${playerScore} points`;
        }
        divLose.style.display = "flex"
        loseText.classList.add("visible-block");
        setTimeout(() => { loseTime.classList.add("visible-block")}, 3000);
        setTimeout(() => { loseMenu.classList.add("visible-block")}, 4000);
    }
}

export {
    timer
};
