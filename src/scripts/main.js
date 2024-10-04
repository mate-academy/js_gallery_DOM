'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  largeImg.src = target.closest('.list-item__link').href;
});
