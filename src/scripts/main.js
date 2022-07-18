'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (evento) => {
  if (
    evento.target.className !== 'gallery__img gallery__thumb'
    && evento.target.className !== 'list-item__link'
  ) {
    return;
  }

  evento.preventDefault();
  document.querySelector('#largeImg').src = evento.target.closest('a').href;
});
// 'evento' because eslint says: 'event' is already declared in the upper scope
