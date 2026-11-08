'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  largeImg.src = link.href;
  e.preventDefault();
});
