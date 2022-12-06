'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', () => {
  const target = event.target.closest('a');

  event.preventDefault();
  largeImg.src = target.href;
  largeImg.alt = target.title;
});
