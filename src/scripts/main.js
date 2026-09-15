'use strict';

const bigImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.tagName === 'IMG') {
    bigImage.src = clickEvent.target.parentElement.href;
  }

  if (clickEvent.target.tagName === 'A') {
    bigImage.src = clickEvent.target.href;
  }
});
