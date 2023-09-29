let inputNumber = document.getElementById('board-size').value;

const space = document.getElementById('pixel-board');
const backColor = document.getElementsByClassName('pixel');
const colorPaint = document.getElementsByClassName('color');

const colorFirst = document.getElementById('color1');
const colorSecond = document.getElementById('color2');
const colorThird = document.getElementById('color3');

const removeMatrix = () => {
  for (let a = backColor.length - 1; a >= 0; a -= 1) {
    backColor[a].remove();
  }
};

const creatChild = (inputNumberReceived) => {
  for (let line = 0; line < inputNumberReceived; line += 1) {
    const linha = space.appendChild(document.createElement('div'));
    linha.className = 'box';
    for (let coluna = 0; coluna < inputNumberReceived; coluna += 1) {
      const colunaMatrix = linha.appendChild(document.createElement('div'));
      colunaMatrix.className = 'pixel';
    }
  }
};

const paintColor = (changeBackColor) => {
  let paint = 'black';
  let newColor = 'black';
  for (let i = 0; i < colorPaint.length; i += 1) {
    colorPaint[i].addEventListener('click', (event) => {
    let classAfter = document.getElementById(paint);
    classAfter.className = 'color';
    let colorAtual = event.target.id;
    paint = colorAtual;
    let classBefore = document.getElementById(paint);
    classBefore.style.backgroundColor = paint;
    classBefore.className = 'color selected';
    newColor = classBefore.style.backgroundColor;
  });
    for (let i = 0; i < backColor.length; i += 1) { 
        backColor[i].addEventListener('click', function () {
          changeBackColor(i, backColor, newColor);
    })}
  }
}

function creatMatrix (inputNumber) {
  removeMatrix();
  creatChild(inputNumber);
  function changeBackColor(posicaoAtual, position, cor) {
    position[posicaoAtual].style.backgroundColor = cor;
  }
  paintColor(changeBackColor);
const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click',function() {
  let reset = document.getElementsByClassName('pixel');
  for (let j = 0; j < reset.length; j += 1) {
    reset[j].style.backgroundColor = 'white';
  }
})
}

function definir() {
  inputNumber = document.getElementById('board-size').value;

  if (inputNumber === false) {
    alert('Board inválido!');
    return false;
  }
  if (inputNumber < 5) {
    creatMatrix(5);
  } else if (inputNumber > 50) {
    creatMatrix(50);
  } else {
    creatMatrix(inputNumber);
  }
}

creatMatrix(5);

function generateColor() {
  const options = '0123456789ABCDEF';
  let colorDraw = '#';
  
  for (let b = 0; b < 6; b += 1) {
    colorDraw += options[Math.floor(Math.random() * 16)];
  }
  return colorDraw;
}

colorFirst.style.backgroundColor = generateColor();
colorSecond.style.backgroundColor = generateColor();
colorThird.style.backgroundColor = generateColor();
