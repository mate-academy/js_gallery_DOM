'use strict';

const acvive = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');

for (const item of links) {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    acvive.src = item.getAttribute('href');
  });
}

