'use strict';

const img = document.querySelectorAll('.list-item');
const largeImg = document.getElementById('largeImg');

for (let i = 0; i < [...img].length; i++) {
  img[i].addEventListener('click', () => {
    const item = event.target.closest('.list-item__link');

    event.preventDefault();

    if (!item.classList.contains('list-item__link')) {
      return;
    }

    largeImg.src = item.href;
  });
};
