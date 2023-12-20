'use strict';

const list = document.querySelector('.gallery__list');
const gallery = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const targetImage = e.target.closest('.list-item__link');

  if (!targetImage || !list.contains(targetImage)) {
    return;
  }

  const imageSrc = targetImage.getAttribute('href');

  gallery.src = imageSrc;
});
