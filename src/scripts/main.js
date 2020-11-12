'use strict';

const mainImage = document.querySelector('#largeImg');
const listItemLinks = document.querySelectorAll('.list-item__link');

for (const img of listItemLinks) {
  img.addEventListener('click', (event) => {
    event.preventDefault();
    mainImage.src = img.href;
  });
}
