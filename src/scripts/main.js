'use strict';

const mainImage = document.getElementById('largeImg');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  const imgSmall = item.querySelector('a');

  mainImage.src = imgSmall.href;
});
