'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  e.preventDefault();

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
