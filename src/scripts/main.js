'use strict';

const largeImg = document.querySelector('#largeImg');
const tumbnails = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
tumbnails.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  switch (target.tagName) {
    case 'IMG':
      largeImg.src = target.parentNode.href;
      break;
    case 'A':
      largeImg.src = target.href;
      break;
  }
});
