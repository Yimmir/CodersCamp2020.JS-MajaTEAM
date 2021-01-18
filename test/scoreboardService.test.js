import {compareScores, decorateScore} from '../src/app/scoreboardService'

describe('ScoreBoard unit tests', () => {
  let scores = [{name: "test",score:100},
    {name: "test" ,score:120},
    {name: "test" ,score:20},
    {name: "test",score:60}];
  test('scores should be sorted',() => {
    expect(scores.sort(compareScores)).toStrictEqual(
      [{name: "test",score:20},
      {name: "test" ,score:60},
      {name: "test" ,score:100},
      {name: "test",score:120}]);
  });

  test("decorateScore should return correct decorators for score", () => {
    let scores = [20,60,100,120];
    expect(decorateScore(scores[0])).toStrictEqual([0,20]);
    expect(decorateScore(scores[1])).toStrictEqual([1,'00']);
    expect(decorateScore(scores[2])).toStrictEqual([1,40]);
    expect(decorateScore(scores[3])).toStrictEqual([2,'00']);
  });


});
