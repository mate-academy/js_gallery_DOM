'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (evn) => {
  const listItem = evn.target.closest('.list-item');
  const link = listItem.children[0];

  evn.preventDefault();
  largeImg.src = link.href;
});
