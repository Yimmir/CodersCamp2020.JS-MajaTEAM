 export const level = document.querySelector("select");
 export let playTime = timeInSeconds();
    
 function timeInSeconds() {
        switch (level.value) {
            case '1':
                return playTime = 180;
            case '2':
                return playTime = 120;
            case '3':
                return playTime = 60;
            default:
                console.log("Difficulty level is not set");
        }
    }

level.addEventListener('change', () => {
        timeInSeconds();
});