'use strict';

const largeImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

[...thumbs.children].forEach((thumb) => {
  const thumbLink = thumb.children[0];

  thumb.addEventListener('click', (e) => {
    e.preventDefault();

    largeImage.src = thumbLink.href;
  });
});
