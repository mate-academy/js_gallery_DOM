'use strict';

const largImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = event.target;
  let newSrc;

  if (target.tagName === 'IMG') {
    newSrc = target.parentElement.href;
  } else if (target.tagName === 'A') {
    newSrc = target.href;
  }

  if (newSrc) {
    largImg.src = newSrc;
  }
});
