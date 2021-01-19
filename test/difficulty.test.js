test('set proper play time', () => {

    document.body.innerHTML = `
        <div class="div-level">
            <label for="difficulty">Select difficulty</label>
                <select name="difficulty" id="difficulty">
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
        </div>
    `;

    let data = require('../src/app/difficulty');
    expect(data.playTime).toBe(180);

});

test('check if there is only 3 difficulty levels', () => {

    document.body.innerHTML = `
        <div class="div-level">
            <label for="difficulty">Select difficulty</label>
                <select name="difficulty" id="difficulty">
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
        </div>
    `;

    let data = require('../src/app/difficulty');
    expect(data.level.childElementCount).toBe(3);

});    