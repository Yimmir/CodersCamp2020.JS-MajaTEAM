const player = {
    _name: '',
    _score: 0,
    _correctAnswers: 0,
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
    },
    get correctAnswersInfo() {
      return this._correctAnswers;
    },
    set correctAnswersInfo(newCorrectAnswer) {
      this._correctAnswers = newCorrectAnswer;
    },
}

export {player};