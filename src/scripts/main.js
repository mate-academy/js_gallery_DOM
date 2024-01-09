'use strict';

const imgLinks = document.querySelectorAll('a');
const mainImgDiv = document.querySelector('#largeImg').parentNode;

// eslint-disable-next-line no-shadow
imgLinks.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();

  mainImgDiv.innerHTML = `
    <img id="largeImg" src="${link.href}"
    alt="main image" class="gallery__large-img gallery__img">
  `;
}));
