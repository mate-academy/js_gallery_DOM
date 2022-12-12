'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const smallImage = document.querySelectorAll('.list-item__link');

for (const img of smallImage) {
  img.addEventListener('click', (e) => {
    e.preventDefault();
    largeImage.src = e.currentTarget.href;
  });
}
