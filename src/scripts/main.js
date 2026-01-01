'use strict';

const list = [...document.querySelectorAll('.list-item__link')];
const img = document.querySelector('#largeImg');

list.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    img.src = link.href;
  });
});
