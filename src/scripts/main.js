'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (even) => {
  even.preventDefault();

  const link = even.target.closest('a');

  largeImg.src = link.href;

  largeImg.alt = link.title;
});
