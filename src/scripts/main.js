'use strict';

const largePhoto = document.getElementById('largeImg');
const smallPhoto = document.getElementById('thumbs');

smallPhoto.addEventListener('click', (e) => {
  const target = e.target.closest('.list-item__link');

  if (target) {
    e.preventDefault();
    largePhoto.src = target.href;
  }
});
