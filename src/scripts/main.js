'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', function (event) {
  event.preventDefault();

  let link = event.target;

  if (link.tagName === 'IMG') {
    link = link.closest('a');
  }

  if (link && link.tagName === 'A') {
    const href = link.getAttribute('href');

    largeImg.src = href;
  }
});
