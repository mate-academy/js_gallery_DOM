'use strict';

const mainImage = document.querySelector('#largeImg');
const linksCollection = document.querySelectorAll('.list-item__link');

linksCollection.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const newSrc = link.getAttribute('href');

    mainImage.setAttribute('src', newSrc);
  });
});
