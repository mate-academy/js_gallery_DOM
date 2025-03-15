'use strict';

const largeImg = document.getElementById('largeImg');
const conteiner = document.getElementById('thumbs');

conteiner.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.classList.contains('gallery__thumb')) {
    largeImg.src = target.parentElement.href;
  } else {
    largeImg.src = target.href;
  }
});
