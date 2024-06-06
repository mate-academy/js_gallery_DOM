'use strict';

const link = document.querySelectorAll('a');
const img = document.querySelector('.gallery__large-img');

link.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    img.setAttribute('src', item.href);
  });
});
