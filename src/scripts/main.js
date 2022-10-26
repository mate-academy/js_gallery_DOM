'use strict';

const mainImage = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');

for (const link of links) {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();

    const item = ev.target.closest('.list-item__link');

    if (!item) {
      return;
    }

    mainImage.src = item.href;
  });
};
