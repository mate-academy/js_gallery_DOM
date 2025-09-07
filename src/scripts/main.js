'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  const mainImg = document.querySelector('.gallery__large-img');
  const imgLink = e.target.closest('.list-item__link');
  const img = e.target.closest('.gallery__img');

  if (imgLink) {
    e.preventDefault();
    mainImg.setAttribute('src', imgLink.getAttribute('href'));
    mainImg.setAttribute('alt', img.getAttribute('alt'));
  }
});
