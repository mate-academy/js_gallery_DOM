'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

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
    largeImg.src = newSrc;
  }
});
