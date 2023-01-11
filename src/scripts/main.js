'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const links = document.querySelectorAll('.list-item__link');

links.forEach(link => {
  link.addEventListener('click', (item) => {
    item.preventDefault();
    largeImage.src = link.href;
  });
});
