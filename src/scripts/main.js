'use strict';

const listIcon = document.querySelectorAll('.list-item__link');
const bigImg = document.querySelector('#largeImg');

for (const icon of listIcon) {
  icon.addEventListener('click', (eventIcon) => {
    eventIcon.preventDefault();
    bigImg.src = icon.href;
  });
};
