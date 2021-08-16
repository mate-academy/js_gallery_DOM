'use strict';

const bigImage = document.querySelector('#largeImg');

const links = document.querySelectorAll('.list-item__link');

for (const elem of links) {
  // eslint-disable-next-line no-shadow
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    bigImage.src = elem.href;
  });
}
