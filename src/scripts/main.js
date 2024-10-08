'use strict';

const thumbImg = document.querySelectorAll('.gallery__thumb');
const largeImg = document.getElementById('largeImg');

thumbImg.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.target.closest('.list-item__link');

    if (link) {
      largeImg.src = link.href;
    }
  });
});
