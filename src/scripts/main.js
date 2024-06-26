'use strict';

const largeImg = document.getElementById('largeImg');
const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    largeImg.src = link.href;
  });
});
