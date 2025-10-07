'use strict';

const thumbs = document.getElementById('thumbs');
const large = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const newSrc = link.getAttribute('href');

  large.src = newSrc;
});
