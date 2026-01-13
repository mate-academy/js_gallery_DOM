'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('.list-item__link');

  if (!thumb) {
    return;
  }

  document
    .querySelector('#largeImg')
    .setAttribute('src', thumb.getAttribute('href'));
});
