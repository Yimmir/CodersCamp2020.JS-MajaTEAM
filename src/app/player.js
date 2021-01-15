const player = {
    _name: '',
    _score: 0,
    get playerName() {
        return this._name;
    },
    set playerName (name) {
        this._name = name;
    },
    get scoreInfo() {
        return this._score;
    },
    set scoreInfo(newScore) {
        this._score = newScore;
    }
}

export {player};