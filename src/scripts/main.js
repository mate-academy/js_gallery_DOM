'use strict';

const listLink = document.querySelectorAll('.list-item__link');
const largeImage = document.querySelector('.gallery__large-img');

for (const a of listLink) {
  a.addEventListener('click', (e) => {
    e.preventDefault();

    largeImage.src = a.href;
  });
}
