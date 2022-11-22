'use strict';

const galleryList = document.querySelector('ul');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (even) => {
  even.preventDefault();

  const item = even.target.closest('.list-item__link');

  largeImg.src = item.href;
}
);
