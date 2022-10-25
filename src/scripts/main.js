'use strict';

const largeImage = document.querySelector('#largeImg');

document.addEventListener('click', e => {
  const target = e.target.closest('a');
  const link = target.href;

  largeImage.src = link;
  e.preventDefault();
});
