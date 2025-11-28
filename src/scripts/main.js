'use strict';

const mainImg = document.querySelector('#largeImg');
const ulist= document.querySelector('ul');

  ulist.addEventListener('click', function (e) {
    e.preventDefault();

    const targetImg = e.target.closest('a');

    if (targetImg) {
      mainImg.src = targetImg.href;
    }
  });
