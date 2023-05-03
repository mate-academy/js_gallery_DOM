'use strict';

const linksCollection = document.querySelectorAll('a');
const largeImage = document.querySelector('#largeImg');

for (const link of linksCollection) {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    largeImage.src = e.target.closest('.list-item__link').href;
  });
}
