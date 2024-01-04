'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const linkOfImage = document.querySelectorAll('.list-item__link');

for (const el of linkOfImage) {
  el.addEventListener('click', (item) => {
    item.preventDefault();
    largeImage.src = el.href;
  });
}
