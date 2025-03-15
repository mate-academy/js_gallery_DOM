'use strict';

const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const bigImg = document.querySelector('.gallery__large-img');
  const liLink = e.target.closest('.list-item__link');

  bigImg.setAttribute('src', liLink.getAttribute('href'));
});
