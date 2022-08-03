function changeBackColor(posicaoAtual, position, cor) {
  position[posicaoAtual].id = cor;
}

const backColor = document.getElementsByClassName('pixel');
const colorPaint = document.getElementsByClassName('color');

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
