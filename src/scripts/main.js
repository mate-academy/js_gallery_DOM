'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (occurrence) => {
  occurrence.preventDefault();

  const target = occurrence.target;

  if (target.tagName === 'IMG') {
    largeImg.src = target.parentElement.href;
  } else if (target.tagName === 'A') {
    largeImg.src = target.href;
  }
});
