'use strict';

const largeImage = document.getElementById('largeImg');
const smallImages = document.querySelectorAll('.list-item__link');

[...smallImages].forEach(link =>
  link.addEventListener('click', (element) => {
    element.preventDefault();
    largeImage.src = link.href;
  }));
