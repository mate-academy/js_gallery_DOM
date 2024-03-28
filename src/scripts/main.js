/* eslint-disable no-useless-return */
'use strict';

const links = document.querySelectorAll('.list-item__link');
const img = document.getElementById('largeImg');

links.forEach((link) => {
  // eslint-disable-next-line no-shadow
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const newImg = link.href;

    img.src = newImg;
  });
});
