'use strict';

const list = document.querySelectorAll('.list-item__link');
const largeImg = document.querySelector('#largeImg');

for (const item of list) {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    largeImg.src = item.href;
  });
}
