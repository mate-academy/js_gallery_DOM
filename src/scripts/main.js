'use strict';

const showBlock = document.querySelector('#largeImg');

const links = document.querySelectorAll('.list-item__link');

links.forEach((link) => {
  link.addEventListener('click', function (even) {
    even.preventDefault();

    showBlock.src = link.href;
  });
});
