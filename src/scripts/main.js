'use strict';

const mainImage = document.querySelector(
  '.gallery__large-img');
const smallImage = document.querySelectorAll(
  '.list-item__link');

for (const ch of smallImage) {

  ch.addEventListener('click', (e) => {
    e.preventDefault();
    mainImage.src = e.currentTarget.href;
  });
}
