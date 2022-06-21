'use strict';

const items = document.querySelectorAll('.list-item');
const image = document.querySelector('#largeImg');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', (e) => {
    e.preventDefault();

    image.src = items[i].children[0].children[0].src;
  });
}
