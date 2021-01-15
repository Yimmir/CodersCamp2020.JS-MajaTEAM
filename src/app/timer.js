const timer = (score) => {
    const howManyMinutes = 2;
    let time = howManyMinutes * 60;
    let position = 0;
    const step = 100 / time;
    const ships = document.querySelector(':root');

    setInterval(countdown, 1000);

    function countdown() {
        ships.style.setProperty('--playerPosition', `${score * 5}%`);
        ships.style.setProperty('--enemyPosition', `${position}%`);

        if (score < 20 || time > 0) {
            position += step;
            time--;
        }
        else {
            return time;
        }

        position = position > 100 ? 100 : position;
    }
}

export { timer };