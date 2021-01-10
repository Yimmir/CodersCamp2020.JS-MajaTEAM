const player = {
    name: '',
    score: 0,
    get playerName() {
        return this.name;
    },
    set playerName (name) {
        this.name = name;
    },
    get scoreInfo() {
        return this.score;
    },
    set scoreInfo(newScore) {
        this.score = newScore;
    }
}

export {player};