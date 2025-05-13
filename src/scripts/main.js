'use strict';

const imagesLarge = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const thumbnail = e.target.closest('a');

  if (!thumbnail) {
    return;
  }

  imagesLarge.src = thumbnail.href;
  imagesLarge.alt = thumbnail.title;
});


