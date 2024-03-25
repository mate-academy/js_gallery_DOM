'use strict';

const largeImg = document.getElementById('largeImg');
const links = document.querySelectorAll('.list-item__link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    largeImg.setAttribute('src', link.href);
  });
});
