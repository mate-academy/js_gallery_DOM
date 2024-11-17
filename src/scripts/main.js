'use strict';

const smallImages = document.querySelectorAll('.list-item__link');
const largeImg = document.querySelector('#largeImg');

smallImages.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const srcLink = e.target.src.replace('http://localhost:8080', '');

    largeImg.src = srcLink;
  });
});
