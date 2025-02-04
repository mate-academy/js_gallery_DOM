'use strict';

const liLink = [...document.querySelectorAll('.list-item__link')];
const largeImg = document.querySelector('#largeImg');

liLink.forEach((e) => {
  e.addEventListener('click', (elem) => {
    largeImg.src = e.href;
    elem.preventDefault();
  });
});
