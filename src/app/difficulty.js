export function selectDifficulty(){
    
    let level = document.querySelector("select");
    let playTime = timeInSeconds();
    function timeInSeconds() {
        switch (level.value) {
            case '1':
                return playTime = 60;
                break;
            case '2':
                return playTime = 120;
                break;
            case '3':
                return playTime = 180;
                break;
        }
    }

    level.addEventListener('change', () => {
        timeInSeconds();
    });

    return playTime;
}