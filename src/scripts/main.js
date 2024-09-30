'use strict';

const largeImage = document.getElementById('largeImg');

const links = document.querySelectorAll('a');

links.forEach((link) => {
  // eslint-disable-next-line no-shadow
  link.addEventListener('click', (event) => {
    event.preventDefault();

    largeImage.src = link.href;
  });
});
