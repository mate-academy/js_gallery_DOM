'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const imageClicked = clickEvent.target.closest('.list-item__link');

  if (!imageClicked) {
    return;
  };

  largeImg.src = imageClicked.href;
});
