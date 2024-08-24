'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const links = document.querySelectorAll('.list-item__link');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    largeImg.src = link.href;
  });
}
