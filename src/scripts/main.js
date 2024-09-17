'use strict';

const list = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

list.addEventListener('click', (evnt) => {
  evnt.preventDefault();

  const item = evnt.target.closest('.list-item');

  if (!item) {
    return;
  }

  const targetLink = item.querySelector('.list-item__link');
  const toggleImage = targetLink.getAttribute('href');

  largeImage.setAttribute('src', toggleImage);
});
