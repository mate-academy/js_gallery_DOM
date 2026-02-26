'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  e.preventDefault();

  const newSrc = link.getAttribute('href').slice(0);

  largeImg.setAttribute('src', newSrc);
});
