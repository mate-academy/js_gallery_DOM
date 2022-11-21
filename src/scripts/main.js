'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target;

  if (item.classList.contains('gallery__img')) {
    const largeImgScr = item.closest('.list-item__link').getAttribute('href');

    largeImg.setAttribute('src', largeImgScr);
  }
});
