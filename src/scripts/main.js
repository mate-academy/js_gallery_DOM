'use strict';

const items = document.querySelectorAll('a');
const bigImg = document.querySelector('#largeImg');

for (const item of items) {
  item.addEventListener('click', (i) => {
    i.preventDefault();
    bigImg.src = item.getAttribute('href');
  });
}
