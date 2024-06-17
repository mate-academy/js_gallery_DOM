'use strict';

const largeImage = document.getElementById('largeImg');
const thumbsContainer = document.getElementById('thumbs');

thumbsContainer.addEventListener('click', (e) => {
  event.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG' && target.parentElement.tagName === 'A') {
    largeImage.src = target.parentElement.href;
  } else if (target.tagName === 'A') {
    largeImage.src = target.href;
  }
});
