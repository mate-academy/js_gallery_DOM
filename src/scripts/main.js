'use strict';

const galery = document.querySelector('.gallery__list');

galery.addEventListener('click', (e) => {
  const click = e.target.closest('a');

  e.preventDefault();

  if (!click) {
    return;
  }

  document.getElementById('largeImg').src = click.href;
});
