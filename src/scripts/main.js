'use strict';

const images = document.querySelectorAll('a');

images.forEach((item) => {
  item.addEventListener('click', (even) => {
    even.preventDefault();

    if (even.target.tagName === 'IMG' || even.target.tagName === 'A') {
      const src = item.getAttribute('href');
      const absoluteSrc = new URL(src, window.location.origin).href;

      document
        .getElementById('largeImg')
        .setAttribute('src', `${absoluteSrc}`);
    }
  });
});
