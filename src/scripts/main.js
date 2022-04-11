'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('.list-item__link');

  if (thumb) {
    largeImg.src = thumb.href;
  }
});
