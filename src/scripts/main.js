'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');

  if (!target) {
    return;
  }

  const newSrc = target.getAttribute('href');

  largeImg.src = newSrc;
});
