import {player} from './player';
const timer = (time) => {
    let position = 0;
    const step = 100 / time;
    const ships = document.querySelector(':root');
    const interval = setInterval(countdown, 1000);

    function countdown() {
        let score = player.correctAnswersInfo;
        ships.style.setProperty('--playerPosition', `${score * 5}%`);
        ships.style.setProperty('--enemyPosition', `${position}%`);

        if (score < 20 && time > 0) {
            position += step;
            time--;
        } else if (score >= 20) {
            clearInterval(interval);
            return time;
        } else {
            clearInterval(interval);
            return score;
        }

        position = position > 100 ? 100 : position;
    }
}

export {
    timer
};