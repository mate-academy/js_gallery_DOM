'use strict';

const list = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const imageLink = e.target.closest('.list-item__link');

  bigImg.src = imageLink.href;
}
);
