'use strict';

const pictureElement = document.querySelector('#largeImg');
const thumbsElement = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
thumbsElement.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('a');

    if (link) {
      pictureElement.src = link.href;
    }
  }
});
