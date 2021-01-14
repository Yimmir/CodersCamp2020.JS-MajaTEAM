const timer = () => {
    const howManyMinutes = 2;
    let time = howManyMinutes * 60;
    let position = 0;
    const step = 100 / time;
    const ships = document.querySelector(':root');

    setInterval(countdown, 1000);

    function countdown() {
        ships.style.setProperty('--playerPosition', `${position}%`);
        ships.style.setProperty('--enemyPosition', `${position}%`);

        position += step;
        time--;
        position = position > 100 ? 100 : position;
        time = time < 0 ? 0 : time;
    }
}

export { timer };