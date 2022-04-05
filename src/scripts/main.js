'use strict';

const bigPicture = document.getElementById('largeImg');

const list = document.getElementById('thumbs');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const img = events.target.closest('.list-item__link');

  bigPicture.src = img.href;
});
