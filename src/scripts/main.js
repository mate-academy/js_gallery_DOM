'use strict';

const links = document.querySelectorAll('.list-item__link');
const largePhoto = document.querySelector('#largeImg');

links.forEach(link =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    largePhoto.src = link.href;
  })
);
