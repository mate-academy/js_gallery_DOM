'use strict';

const thumbs = document.getElementById('thumbs');
const large = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  e.preventDefault();

  const newSrc = link.getAttribute('href');
  const img = link.querySelector('img');

  large.src = newSrc;
  large.alt = img?.alt || '';
});
