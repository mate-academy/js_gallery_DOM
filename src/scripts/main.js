'use strict';

const list = document.querySelector('#thumbs');
const img = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const closest = e.target.closest('.list-item__link');

  if (!closest || !list.contains(closest)) {
    return;
  };

  img.src = closest.href;
});
