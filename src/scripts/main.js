'use strict';

const bigImg = document.querySelector('.gallery__large-img');
const links = document.querySelectorAll('a');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    bigImg.src = e.target.closest('.list-item__link').href;
  });
}
