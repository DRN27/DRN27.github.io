'use strust';

let rollResult;
let rollCounter = 0;
let score = 0;
let currentScore = 0;
const rollResultPrint = document.getElementById('result');
const rollCounterPrint = document.getElementById('throw');
const currentScorePrint = document.getElementById('currentScore');
const scorePrint = document.getElementById('score');

let game = {
    result: function () { //Вывод результата броска кубика
        rollResultPrint.textContent = `Вам выпало число: ${rollResult}`;
        if (rollResult == 1) {
            currentScore = 0; 
            rollResult = 0;
            rollCounter ++;
            rollCounterPrint.textContent = `Количествово ходов: ${rollCounter}`;
        }
        currentScore += rollResult;
        currentScorePrint.textContent = `Текущий счёт: ${currentScore}`;
    },
    rollDice: function () { //бросок кубика
        rollResult = 1 + Math.floor( 6 * Math.random() );
        game.result();
    },
    endTurn: function () {
        score += currentScore;
        currentScore = 0;
        rollCounter ++;
        rollCounterPrint.textContent = `Количествово ходов: ${rollCounter}`;
        if (score >= 100) {
            alert(`Вы набрали нужное количество очков, на это вам понадобилось: ${rollCounter} хода`);
            game.end();
            score = 0;
        }
        game.print ();
    },
    print: function () {
        scorePrint.textContent = `Общий счёт: ${score}`;
        currentScorePrint.textContent = `Текущий счёт: ${currentScore}`;
        rollResultPrint.textContent = "";
    },
    end: function () {
        rollCounter = 0;
        rollCounterPrint.textContent = `Количествово бросков: ${rollCounter}`;
    }
}