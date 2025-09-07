'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  const largeImg = document.querySelector('.gallery__large-img');
  const imgLink = e.target.closest('.list-item__link');

  e.preventDefault();
  largeImg.setAttribute('src', imgLink.getAttribute('href'));
});
