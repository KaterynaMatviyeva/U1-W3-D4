//funzione che crea il tabellone principale
const createTabellone = function () {
  for (let i = 1; i < 77; i++) {
    const caselle = document.createElement("div");
    const tabellone = document.getElementById("tabellone");
    tabellone.appendChild(caselle);
    caselle.innerText = i;
    caselle.className = "cells";
    tabellone.appendChild(caselle);
  }
};

//funziona che crea cartelle del giocatore
let selectedCount = 0;
const createCartellaPlayer = function (index) {
  const usedNumbers = [];
  const contenitoreCartelle = document.getElementById("chooseCartella");
  const cartella = document.createElement("div");
  cartella.className = "cartella";
  contenitoreCartelle.appendChild(cartella);

  for (let i = 1; i < 25; i++) {
    const casellina = document.createElement("div");

    let randomNumCell;
    do {
      randomNumCell = Math.floor(Math.random() * 76) + 1;
    } while (usedNumbers.includes(randomNumCell));

    usedNumbers.push(randomNumCell);
    cartella.appendChild(casellina);
    casellina.innerText = randomNumCell;
    casellina.className = "cells2";
  }
  //cartelle che si scelgono

  cartella.addEventListener("click", function (e) {
    selectedCount++;
    const cartelleSceltaDalGiocatore = document.getElementById("cartelleScelte");
    cartelleSceltaDalGiocatore.appendChild(cartella);

    //nascondo il contenitore scegliCartella e il suo titolo
    const h2 = document.getElementsByTagName("h2");
    console.log(selectedCount);
    if (selectedCount === 3) {
      contenitoreCartelle.style.display = "none";
      h2[0].style.display = "none";
      alert("START");
    }

    //
    // for (let i = 0; i < contenitoreCartelle.length; i++) {
    //   if (i <= contenitoreCartelle[2]) contenitoreCartelle.style.display = "none";
    //
    //   break;
    // }
  });
};

//funzione al click del tasto fai uscire il numero random e seleziona la cella del numero corrispondente

const getRandomNumber = function () {
  const randomNumberButton = document.getElementById("rollBtn");
  randomNumberButton.onclick = function () {
    const randomNum = Math.floor(Math.random() * 76) + 1;
    const selectedCell = document.getElementsByClassName("cells");

    for (let i = 0; i < selectedCell.length; i++) {
      const cellNumber = parseInt(selectedCell[i].innerText);
      if (randomNum === cellNumber) {
        selectedCell[i].className = selectedCell[i].className + " selected";
        break;
      }
    }

    const selectedCell2 = document.getElementsByClassName("cells2");

    for (let j = 0; j < selectedCell2.length; j++) {
      const cellNum = parseInt(selectedCell2[j].innerText);
      if (randomNum === cellNum) {
        selectedCell2[j].className = selectedCell2[j].className + " selected";
      }
    }

    console.log(randomNum);
  };
};

window.onload = () => {
  getRandomNumber();
  createTabellone();
  for (let i = 0; i < 6; i++) {
    createCartellaPlayer(i);
  }
};
