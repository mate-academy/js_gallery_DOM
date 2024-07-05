'use strict';

const images = document.querySelectorAll('a');

images.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
      const src = item.getAttribute('href');

      document.getElementById('largeImg').setAttribute('src', `${src}`);
    }
  });
});
