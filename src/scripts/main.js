'use strict';

const largeImage = document.querySelector('#largeImg');
const smalImages = document.querySelectorAll('a');

for (const item of smalImages) {
  item.addEventListener('click', (eventFunc) => {
    eventFunc.preventDefault();
    largeImage.src = item.href;
  });
}
