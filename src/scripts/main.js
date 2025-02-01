'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName.toLowerCase() === 'img') {
    const parentElement = target.parentElement;

    largeImg.src = parentElement.href;
  } else if (target.tagName.toLowerCase() === 'a') {
    largeImg.src = target.href;
  }
});
