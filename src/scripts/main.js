'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const smallImage = event.target.closest('.list-item');

  mainImage.src = smallImage.children[0].href;
});
