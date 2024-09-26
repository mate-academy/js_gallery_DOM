'use strict';

const largeImage = document.querySelector('#largeImg');
const links = document.querySelectorAll('a');

for (const link of links) {
  link.addEventListener('click', (item) => {
    item.preventDefault();
    largeImage.src = link.href;
  });
}
