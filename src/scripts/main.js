'use strict';

const bigImg = document.querySelector('#largeImg');
const list = document.querySelectorAll('.list-item');
const img = document.querySelectorAll('.list-item__link');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', (event) => {
    event.preventDefault();
    bigImg.src = img[i].href;
  });
}
