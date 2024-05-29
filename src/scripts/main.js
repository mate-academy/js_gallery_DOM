'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (currEvent) => {
  currEvent.preventDefault();

  const link = currEvent.target.closest('.list-item__link');

  largeImg.src = link.href;
});
