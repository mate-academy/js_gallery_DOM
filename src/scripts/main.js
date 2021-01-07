'use strict';

const photoLinks = document.querySelectorAll('.list-item__link');
const mainPhoto = document.getElementById('largeImg');

[...photoLinks].forEach(link =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    mainPhoto.src = e.currentTarget.href;
  })
);
