let inputNumber = document.getElementById('board-size').value;

let space = document.getElementById('pixel-board');
const backColor = document.getElementsByClassName('pixel');
const colorPaint = document.getElementsByClassName('color');

function definir () {
  inputNumber = document.getElementById('board-size').value;

  if (inputNumber == false){
    alert('Board inválido!');
    return false;
  } else if (inputNumber < 5) {
    creatMatrix (5);
  } else if (inputNumber > 50) {
  creatMatrix (50);
  } else {
    creatMatrix (inputNumber);
  }
}

function creatMatrix (inputNumber) {
  for (let a = backColor.length - 1; a >= 0; a -= 1){
    backColor[a].remove();
  }
  
  for (let line = 0; line < inputNumber; line += 1) {
    const linha = space.appendChild(document.createElement('div'));
    linha.className = 'box';
    for (let coluna = 0; coluna < inputNumber; coluna += 1) {
      const coluna = linha.appendChild(document.createElement('div'));
      coluna.className = 'pixel';
    }
  }


function changeBackColor(posicaoAtual, position, cor) {
  position[posicaoAtual].id = cor;
}

let paint = 'black';

for (let i = 0; i < colorPaint.length; i += 1) {  
  colorPaint[i].addEventListener('click', function (event) {
    let classAfter = document.getElementById(paint);
    classAfter.className = 'color';
    let colorAtual = event.target.id;
    paint = colorAtual;
    let classBefore = document.getElementById(paint);
    classBefore.className = 'color selected';
  });
}

for (let i = 0; i < backColor.length; i += 1) { 
  backColor[i].addEventListener('click', function () {
    changeBackColor(i, backColor, paint);
  });
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click',function() {
  let reset = document.getElementsByClassName('pixel');
  for (let j = 0; j < reset.length; j += 1) {
    reset[j].id = '';
  }
})
}

creatMatrix(5);