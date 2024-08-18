'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const itemLink = [...document.querySelectorAll('.list-item__link')];

itemLink.forEach((img) => {
  img.addEventListener('click', (e) => {
    e.preventDefault();
    mainImg.src = img.href;
  });
});
