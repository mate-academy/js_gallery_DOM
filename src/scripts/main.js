'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (evento) => {
  evento.preventDefault();

  if (evento.target.closest('a')) {
    const link = evento.target.closest('a');
    largeImg.src = link.href;
  }
});
