'use strict';

const image = document.getElementById('largeImg');

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const img = link.querySelector('img');

  link.setAttribute('href', '#');

  link.addEventListener('click', () => {
    if (img) {
      image.src = img.src;
    }
  });
});
