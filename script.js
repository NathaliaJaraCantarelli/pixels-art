let inputNumber = document.getElementById('board-size').value;

let space = document.getElementById('pixel-board');
const backColor = document.getElementsByClassName('pixel');
const colorPaint = document.getElementsByClassName('color');

let colorFirst = document.getElementById('color1');
let colorSecond = document.getElementById('color2');
let colorThird = document.getElementById('color3');

colorFirst.style.backgroundColor = generateColor();
colorSecond.style.backgroundColor = generateColor();
colorThird.style.backgroundColor = generateColor();

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
  position[posicaoAtual].style.backgroundColor = cor;
}

let paint = 'black';
let newColor = 'black';


for (let i = 0; i < colorPaint.length; i += 1) { 
  
  colorPaint[i].addEventListener('click', function (event) {
    let classAfter = document.getElementById(paint);
    classAfter.className = 'color';
    let colorAtual = event.target.id;
    paint = colorAtual;
    let classBefore = document.getElementById(paint);
    classBefore.style.backgroundColor = paint;
    classBefore.className = 'color selected';
    newColor = classBefore.style.backgroundColor;
    console.log(newColor);
    
  });
  for (let i = 0; i < backColor.length; i += 1) { 
      backColor[i].addEventListener('click', function () {
        changeBackColor(i, backColor, newColor);
      });
    }
}



const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click',function() {
  let reset = document.getElementsByClassName('pixel');
  for (let j = 0; j < reset.length; j += 1) {
    reset[j].style.backgroundColor = 'white';
  }
})
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

