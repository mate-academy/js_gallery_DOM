'use strict';

const listItemLink = document.querySelectorAll('.list-item__link');
const largeImg = document.querySelector('#largeImg');

listItemLink.forEach((smallImg) => {
  smallImg.addEventListener('click', (e) => {
    e.preventDefault();
    largeImg.src = smallImg.href;
  });
});
