//array vuoto dove pushare le celle con i numeri da 1 a 76
const tombolaCellsArray = [];
const tombolaCellsArray2 = [];

//funzione che crea celle (div)
const createCells = function () {
  for (let i = 1; i < 77; i++) {
    const newDiv = document.createElement("div");
    const divOfDivs = document.getElementById("tombolaCells");
    divOfDivs.appendChild(newDiv);
    newDiv.innerText = i;
    newDiv.className = "cells";
    tombolaCellsArray.push([i]);
  }
};

//funziona che crea celle del giocatore
const createCellsPlayer = function () {
  const usedNumbers = [];
  for (let i = 1; i < 25; i++) {
    const newDiv2 = document.createElement("div");
    const divOfDivs2 = document.getElementById("tombolaCellsPlayer");
    //numeri random che non si ripetono
    let randomNumCell;
    do {
      randomNumCell = Math.floor(Math.random() * 76) + 1;
    } while (usedNumbers.includes(randomNumCell));

    usedNumbers.push(randomNumCell);
    divOfDivs2.appendChild(newDiv2);
    tombolaCellsArray2.push(randomNumCell);
    //dobbiamo pushare i numeri random da 1 a 76 nelle 24 celle

    newDiv2.innerText = randomNumCell;
    newDiv2.className = "cells2";
  }
};

//funzione al click del tasto fai uscire il numero random e seleziona la cella del numero corrispondente

const getRandomNumber = function () {
  const randomNumberButton = document.getElementById("rollBtn");
  randomNumberButton.onclick = function () {
    //far si che confronti i numeri e non gli indici
    const randomNum = Math.floor(Math.random() * 76) + 1;
    for (let i = 0; i < tombolaCellsArray.length; i++) {
      if (randomNum === tombolaCellsArray[i]) {
        //devo evidenziare la cella del numero quindi il div della cella
        const selectedCell = document.getElementsByClassName("cells");
        selectedCell[i].className = selectedCell[i].className + " selected";
      }
    }
    //il ciclo per la tabella dei giocatori

    for (let j = 0; j < tombolaCellsArray2.length; j++) {
      if (randomNum === tombolaCellsArray2[j]) {
        //devo evidenziare la cella del numero quindi il div della cella
        const selectedCell = document.getElementsByClassName("cells2");
        selectedCell[j].className = selectedCell[j].className + " selected";
      }
    }

    console.log(randomNum);
  };
};
getRandomNumber();

//all'avvio svolgi queste funzioni
window.onload = () => {
  //crea celle con i numeri
  createCells();
  createCellsPlayer();
};
