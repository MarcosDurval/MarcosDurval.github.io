const cor = document.querySelector('#pixel-board');
const divMain = document.querySelector('#color-palette');
const botaoClear = document.querySelector('#clear-board');
const ButaoSort = document.querySelector('#random-cor');
const quadro = document.querySelectorAll('.pixel');
const entraNum = document.querySelector('#generate-board');
botaoClear.innerHTML = 'Limpar';

function Paleta() {
  const nCores = 15;
  for (let i = 0; i < nCores; i += 1) {
    const cor1 = document.createElement('div');
    divMain.appendChild(cor1);
    cor1.className = 'color';
  }
}
Paleta();



function valorP() { //primeiro carregamento da página
  const linhas = 5; 
  for (let i = 0; i < linhas; i += 1) {
    const caixa = document.createElement('tr');
    cor.appendChild(caixa);
    for (let j = 0; j < linhas; j += 1) {
      const pixel = document.createElement('td');
      caixa.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

function tabela() {
  const n = document.querySelector('#board-size').value;
  let linhas = n;
  if (linhas === '') {
    return window.alert('Board inválido!');
  }
  if (linhas < 5) {
    linhas = 5;
  } else if (linhas > 50) {
    linhas = 50;
  }
  while (cor.firstChild) { // apaga todos os filhos de cor antes de criar.
    cor.removeChild(cor.firstChild);
  }
  for (let i = 0; i < linhas; i += 1) {
    const caixa = document.createElement('tr');
    cor.appendChild(caixa);
    for (let j = 0; j < linhas; j += 1) {
      const pixel = document.createElement('td');
      caixa.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}


const listaC = document.querySelectorAll(".color")
function coresF() {
  for (let index = 0; index < listaC.length; index += 1) {
    if (listaC[index] === listaC[0]) {
      listaC[index].style.background = "black"
      listaC[index].classList.add("selected")
    } else if (listaC[index] === listaC[1]) {
      listaC[index].style.background = "white"
    }
    else {
      listaC[index].style.background = sortCor()
    }
  }
}

function sortCor(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r},${g},${b}, ${opacidade})`;
}



function ver() {
  const rece = document.querySelector('.selected');
  const receCor = window.getComputedStyle(rece);
  const corBack = receCor.getPropertyValue('background-color')
  cor.addEventListener('click', (event) => {
    event.target.style.background = corBack;
  });
  ;
}


function selecaoC() {
  for (let index = 0; index < listaC.length; index += 1) {
    listaC[index].addEventListener("click", (event) => {
      let apaga = document.querySelector(".selected")
      apaga.classList.remove("selected")
      listaC[index].classList.add("selected")
      ver()
    })
  }
}
selecaoC()


// function selecCores() {
//     divMain.addEventListener('click', (event) => {
//     const apaga = document.querySelector('.selected');
//     apaga.classList.remove('selected');
//     event.target.classList.add('selected');
//     ver();
//   });
// }
// selecCores();

// Pinta os pixels de branco
function clear() {
  const quadro = document.querySelectorAll(".pixel")
  for (let i = 0; i < quadro.length; i += 1) {
    quadro[i].style.background = 'white';
  }
}



botaoClear.addEventListener('click', clear);
ButaoSort.addEventListener('click', coresF);
entraNum.addEventListener('click', tabela);

valorP();//
coresF();//
ver()
