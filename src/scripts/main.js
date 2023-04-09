'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.tagName === 'IMG') {
    largeImg.src = target.parentNode.href;
  }
});
