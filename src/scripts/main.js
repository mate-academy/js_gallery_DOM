'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const picture = event.target.closest('.list-item__link');

  if (!picture || !gallery.contains(picture)) {
    return;
  }

  const mainImg = document.querySelector('.gallery__large-img');

  mainImg.src = picture.href;
});
