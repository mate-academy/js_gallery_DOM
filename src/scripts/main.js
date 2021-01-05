'use strict';

const listItemLinks = document.querySelectorAll('.list-item__link');
const largeImg = document.querySelector('#largeImg');

for (const link of listItemLinks) {
  link.addEventListener('click', (e) => {
    largeImg.src = link.href;
    e.preventDefault();
  });
}
