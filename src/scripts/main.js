'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' || event.target.tagName === 'a') {
    event.preventDefault();

    let newSrc;

    if (event.target.tagName === 'IMG') {
      newSrc = event.target.parentElement.href;
    } else {
      newSrc = event.target.href;
    }

    largeImg.src = newSrc;
  }
});
