'use strict';

const largeImg = document.getElementById('largeImg');
const linkList = document.getElementsByClassName('list-item__link');

[...linkList].forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    largeImg.src = e.target.closest('.list-item__link').href;
  });
});
