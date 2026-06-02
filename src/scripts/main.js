'use strict';

const thumbs = document.getElementById('thumbs');
const image = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    image.src = link.href;
  }
});
