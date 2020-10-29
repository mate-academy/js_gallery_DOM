'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelectorAll('.list-item__link');

for (const key of galleryList) {
  key.addEventListener('click', (event) => {
    event.preventDefault();

    largeImg.src = key.href;
  });
}
