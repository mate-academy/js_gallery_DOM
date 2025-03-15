'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = gallery.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.classList.contains('gallery__img')
    || clickEvent.target.classList.contains('list-item__link')) {
    clickEvent.preventDefault();

    const imageUrl = clickEvent.target.closest('.list-item__link').href;

    largeImg.src = imageUrl;
  }
});
