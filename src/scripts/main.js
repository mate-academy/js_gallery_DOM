'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  const smallImg = item.querySelector('a');

  mainImage.src = smallImg.href;
});
