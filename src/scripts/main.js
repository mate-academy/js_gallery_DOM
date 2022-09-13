/* eslint-disable no-shadow */
'use strict';

const mainImage = document.querySelector('#largeImg');
const listItems = document.querySelectorAll('.list-item');

for (const item of listItems) {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    const link = item.querySelector('a');

    mainImage.src = link.href;
  });
}
