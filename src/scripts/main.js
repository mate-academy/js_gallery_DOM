'use strict';

const links = Array.from(document.querySelectorAll('a'));
const img = document.querySelector('#largeImg');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    img.src = link.href;
  });
});
