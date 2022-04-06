// Variabili
const app = document.getElementById("app");
const again = document.getElementById("again");
const h3 = document.createElement("h3");
const min = 1;
const max = 100;
const nums = 5;
let randomNums = [];
let userGuess;
let correctAnswers = [];
let tot = 0;

//Impostazione iniziale pagina
app.append(h3);
play();

// Eventi
again.addEventListener("click", play);

// Funzioni
// Play
function play() {
    again.style.display = "none";
    randomNums = [];
    for(i = 0; i < nums; i++) {
        let x = getRndInteger(min, max);
        while(randomNums.includes(x)) {
            x = getRndInteger(min, max);
        }
        randomNums.push(x);
    }
    h3.innerHTML = randomNums;
    setTimeout(guess, 30000);
}

// Controllo numeri in input
function guess() {
    correctAnswers = [];
    tot = 0;
    h3.innerHTML = "";
    for(i = 1; i <= nums; i++) {
        userGuess = parseInt(prompt(`Qual era il ${i}° numero?`));
        console.log(userGuess)
        console.log(randomNums)
        console.log(tot)
        if(randomNums.includes(userGuess)) {
            correctAnswers.push(userGuess);
            let index = randomNums.indexOf(userGuess);
            randomNums.splice(index, 1)
            tot++;
        }
    }
    switch(tot) {
        case 0:
            h3.innerHTML = "Non hai indovinato nessun numero, CAPRA!";
            break;
        case 1:
            h3.innerHTML = `Hai indovinato un solo numero (${correctAnswers}), non ci siamo! <br> Gli altri numeri erano ${randomNums}`;
            break;
        case 2:
            h3.innerHTML = `Hai indovinato ${tot} numeri (${correctAnswers}), puoi fare di meglio! <br> Gli altri numeri erano ${randomNums}`;
            break;
        case 3:
            h3.innerHTML = `Hai indovinato ${tot} numeri (${correctAnswers}), non male! <br> Gli altri numeri erano ${randomNums}`;
            break;
        case 4:
            h3.innerHTML = `Hai indovinato ${tot} numeri (${correctAnswers}), bravo! <br> Gli altri numeri erano ${randomNums}`;
            break;
        case 5:
            h3.innerHTML = `Hai indovinato ${tot} numeri (${correctAnswers}), genio!`;
            break;
        default:
            h3.innerHTML = "Non hai indovinato nessun numero, CAPRA!";
    }
    again.style.display = "inline-block";
}

// Funzione generica per numeri randomici
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }