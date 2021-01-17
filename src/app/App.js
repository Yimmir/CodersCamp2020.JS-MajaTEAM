import { player } from "./player.js";
import {getModeProperties} from './gameMode';
import { startQuiz, checkAnswer } from "./quizGame.js";
import {getLocalScores, clearLocalScoreList, saveLocalScores} from  "./localScoreboard"
import {getGlobalScores, clearGlobalScoreList} from './globalScoreboard';

export const App = ({options}) => {

    //deklaracje divów
    const divStart = document.getElementById("div-start");
    const divPlay = document.getElementById("div-play");
    const divMenu = document.getElementById("div-menu");
    const divCategories = document.getElementById("div-categories");
    const divQuiz = document.getElementById("div-quiz");
    const divRules = document.getElementById("div-rules");
    const divHighscores = document.getElementById("div-highscores");
    const appScreen = document.getElementById("body-wrapper");

    //deklaracje przycisków
    const btnPlay = document.getElementById("button-play");
    const btnNext = document.getElementById("button-next");
    const btnStart = document.getElementById("button-start");
    const btnStartQuiz = document.getElementById("button-startquiz");
    const btnMainMenu = document.getElementById("button-mainmenu");
    const btnRules = document.getElementById("button-rules");
    const btnHighscores = document.getElementById("button-highscores");
    const btnHome = document.getElementById("home");
    const btnFooter = document.getElementById("footer");
    
    //deklaracje wyboru trybu
    const modes = document.querySelectorAll(".mode")

    //deklaracje inne
    const playerOutput = document.getElementById("playerPlaceholder");
    const textBox = document.getElementById("nickname");
    const loader = document.getElementById("highScoresLoader");

    btnPlay.addEventListener('click', () => {
        divPlay.style.display = "none";
        divStart.style.display = "block";
        textBox.focus();
    })

    textBox.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
        event.preventDefault();
        btnNext.click();
        }
    });

    //funkcje zmiany ekranu
    btnNext.addEventListener('click', () => {
        const userNickname = document.getElementById("nickname").value;
        if (userNickname.length >= 3) {
            player.playerName = userNickname;
            playerOutput.innerText = player.playerName;
            divStart.style.display = "none";
            divMenu.style.display = "flex";
        } else {
            alert('Name to short!')
        }
    })

    btnStart.addEventListener('click', () => {
        divMenu.style.display = "none";
        divCategories.style.display = "flex";
        btnHome.style.display = "flex";
    })

    btnStartQuiz.addEventListener('click', () => {
        divCategories.style.display = "none";
        divQuiz.style.display = "flex";
        startQuiz(modeSelected);
    })

    btnRules.addEventListener('click', () => {
        divMenu.style.display = "none";
        divRules.style.display = "flex";
        btnHome.style.display = "flex";
    })

    btnHighscores.addEventListener('click', () => {
        loader.style.display = 'block';
        divMenu.style.display = "none";
        divHighscores.style.display = "flex";
        btnHome.style.display = "flex";
        saveLocalScores("Mateusz", '80');
        saveLocalScores("Dariusz", '90');
        saveLocalScores("Adam", '100');
        getLocalScores();
        getGlobalScores().then(() => {
            loader.style.display = 'none';
        });
        localStorage.clear();
    });


    //Powrót do menu
    btnHome.addEventListener('click', () =>{
        let activeDiv = document.querySelector('.boxLarge[style*="display: flex;"]');
        activeDiv.style.display = "none";
        divMenu.style.display = "flex";
        btnHome.style.display = "none";
        clearGlobalScoreList();
        clearLocalScoreList();
    })

    //jaki tryb został wybrany
    let modeSelected;
    for (let i = 0; i < modes.length; i++) {
        modes[i].addEventListener('click', (e) => {
            modeSelected = getModeProperties(i);
            for (let j = 0; j < modes.length; j++) {
                modes[j].classList.remove('modeEnabled');
                modes[j].classList.add('modeDisabled');
            }
            modes[i].classList.remove('modeDisabled');
            modes[i].classList.add('modeEnabled');
        })
    }

    //Funkcja klik, może się przyda
    const cbox = document.querySelectorAll(".answer");
     for (let i = 0; i < cbox.length; i++) {
         cbox[i].addEventListener("click", (e) => checkAnswer(modeSelected, e));
     }

    //Operator stopki

    btnFooter.addEventListener('click', () => {
        appScreen.classList.toggle('lift')
    })

}
