import {player} from '../src/app/player';


player._name = 'Adam';
player._score = 100;

test('reading player name', () => {
    expect(player.playerName).toBe('Adam');
})

test('reading player scroe', () => {
    expect(player.scoreInfo).toBe(100);
})
