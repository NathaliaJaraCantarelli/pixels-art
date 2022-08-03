function changeBackColor(posicaoAtual, classe) {
  classe[posicaoAtual].className = "pixel selected";
}

const backColor = document.getElementsByClassName('pixel');
for (let i = 0; i < backColor.length; i += 1) {
  backColor[i].addEventListener('click', function() {
    changeBackColor(i, backColor);
  });
}
