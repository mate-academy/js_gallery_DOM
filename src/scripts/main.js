'use strict';

const images = [...document.querySelectorAll('a')];

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('img');

    if (!link) {
      return;
    }

    const large = document.getElementById('largeImg');

    large.src = image.href;
  });
});
