function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDiceForDiceElement(diceElement) {
    const max = 6;
    const min = 1;

    let diceRoll = getRandomInt(min, max);

    const dots = diceElement.querySelectorAll('.dot');
    dots.forEach(dot => dot.style.display = 'none');

    switch (diceRoll) {
        case 1:
            diceElement.querySelector('.one').style.display = 'block';
            break;
        case 2:
            diceElement.querySelector('.two').style.display = 'block';
            diceElement.querySelector('.five').style.display = 'block';
            break;
        case 3:
            diceElement.querySelector('.one').style.display = 'block';
            diceElement.querySelector('.two').style.display = 'block';
            diceElement.querySelector('.five').style.display = 'block';
            break;
        case 4:
            diceElement.querySelector('.two').style.display = 'block';
            diceElement.querySelector('.three').style.display = 'block';
            diceElement.querySelector('.four').style.display = 'block';
            diceElement.querySelector('.five').style.display = 'block';
            break;
        case 5:
            diceElement.querySelector('.one').style.display = 'block';
            diceElement.querySelector('.two').style.display = 'block';
            diceElement.querySelector('.three').style.display = 'block';
            diceElement.querySelector('.four').style.display = 'block';
            diceElement.querySelector('.five').style.display = 'block';
            break;
        case 6:
            diceElement.querySelector('.two').style.display = 'block';
            diceElement.querySelector('.three').style.display = 'block';
            diceElement.querySelector('.four').style.display = 'block';
            diceElement.querySelector('.five').style.display = 'block';
            diceElement.querySelector('.six').style.display = 'block';
            diceElement.querySelector('.seven').style.display = 'block';
            break;
    }
}

function rollAllDice() {
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(diceElement => rollDiceForDiceElement(diceElement));
}


window.onload = function() {
    const is_Test_Env = !!(process.env.IS_TEST_ENV); // Retrieve environment variable
    const testTag = document.getElementById('testTag');
    
    if (is_Test_Env && testTag) {
        testTag.style.display = 'block';
    } else if (testTag) {
        testTag.style.display = 'none';
    }
};


document.addEventListener('DOMContentLoaded', (event) => {
    rollAllDice();
});
