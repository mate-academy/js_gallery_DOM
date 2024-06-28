/* eslint-disable no-shadow */
'use strict';

const sideImg = document.querySelectorAll('img');

Array.from(sideImg)
  .slice(1)
  .forEach((img) => {
    const currentImg = img.getAttribute('src').split('-')[1];

    img.addEventListener('click', (event) => {
      event.preventDefault();

      Array.from(sideImg)
        .slice(0, 1)[0]
        .setAttribute('src', `/images/landscape-${currentImg}.png`);
    });
  });
