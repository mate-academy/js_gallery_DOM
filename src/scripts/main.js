'use strict';

const mainImage = document.querySelector('#largeImg');
const linksList = document.querySelectorAll('a');

for (const imageLink of linksList) {
  imageLink.addEventListener('click', (e) => {
    e.preventDefault();

    mainImage.src = imageLink.href;
  });
};
