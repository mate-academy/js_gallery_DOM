'use strict';

const largePhoto = document.getElementById('largeImg');
const smallPhoto = document.getElementById('thumbs');

smallPhoto.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');

  if (target) {
    largePhoto.src = target.href;
  }
});
