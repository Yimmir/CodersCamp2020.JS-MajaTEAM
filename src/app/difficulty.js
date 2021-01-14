export function selectDifficulty(){
    
    let level = document.querySelector("select");
    let playTime = timeInMilis();
    function timeInMilis() {
        switch (level.value) {
            case '1':
                return playTime = 60000;
                break;
            case '2':
                return playTime = 120000;
                break;
            case '3':
                return playTime = 180000;
                break;
        }
    }

    level.addEventListener('change', () => {
        timeInMilis();
    });

    return playTime;
}