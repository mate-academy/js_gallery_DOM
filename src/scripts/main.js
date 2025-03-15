'use strict';

const largeImg = document.getElementById('largeImg');
const thumbLinks = document.querySelectorAll(
  '.list-item__link, .gallery__thumb',
);

thumbLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const newSrc = e.currentTarget.href;

    largeImg.src = newSrc;
  });
});
