'use strict';

const largeImage = document.getElementById('largeImg');

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();

    largeImage.setAttribute('src', e.target.href);
  } else if (e.target.tagName === 'IMG') {
    e.preventDefault();

    largeImage.setAttribute('src', e.target.closest('a').href);
  }
});
