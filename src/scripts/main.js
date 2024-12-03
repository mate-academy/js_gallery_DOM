'use strict';

const list = document.getElementById('thumbs');
const bigImage = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (item) {
    const anchor = item.firstElementChild;
    const href = anchor.getAttribute('href');

    bigImage.setAttribute('src', href);
  }
});
