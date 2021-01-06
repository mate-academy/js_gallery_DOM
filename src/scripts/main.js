'use strict';

const thumbs = document.getElementById('thumbs');
const img = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  img.src = item.firstElementChild.href;
});
