'use strict';

const images = document.querySelectorAll('a');

images.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
      const src = item.getAttribute('href');
      const absoluteSrc = new URL(src, window.location.origin).href;

      document.getElementById('largeImg').setAttribute('src', `${absoluteSrc}`);
    }
  });
});
