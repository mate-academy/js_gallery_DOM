'use strict';

const pics = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__large-img');

for (const pic of pics.querySelectorAll('.list-item__link')) {
  pic.addEventListener('click', (e) => {
    e.preventDefault();
    bigImg.src = pic.href;
  });
}
