'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
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
