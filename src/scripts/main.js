'use strict';

const list = document.querySelector('#thumbs');
const img = document.querySelector('#largeImg');

list.addEventListener('click', (c) => {
  c.preventDefault();

  const closest = c.target.closest('.list-item__link');

  if (!closest || list.contains(closest)) {
    img.src = closest.href;
  }
});
