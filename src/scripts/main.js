'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImg = document.querySelectorAll('.list-item__link');

const arr = Array.from(smallImg).map(
  (item) => item.getAttribute('href').replace(/\/images\/landscape-|.png/g, ''),
  {},
);

smallImg.forEach(
  (item, i) =>
    item.addEventListener('click', function (e) {
      e.preventDefault();

      largeImg.setAttribute('src', `./images/landscape-${arr[i]}.png`);
    }),
  {},
);
