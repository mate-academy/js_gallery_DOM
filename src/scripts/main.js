'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (item) {
    const largeImg = document.getElementById('largeImg');

    largeImg.src = item.href;
  }
});
