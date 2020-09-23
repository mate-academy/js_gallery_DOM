'use strict';

const img = document.getElementById('largeImg');
const list = document.querySelectorAll('a');

for (const item of list) {
  item.addEventListener('click', (event) => {
    img.src = item.href;
    event.preventDefault();
  });
};
