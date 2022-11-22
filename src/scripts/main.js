'use strict';

const galleryList = document.querySelector('ul');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (even) => {
  even.preventDefault();
  largeImg.src = even.target.src;
}
);
