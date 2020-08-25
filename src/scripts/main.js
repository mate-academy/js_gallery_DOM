'use strict';

const list = document.querySelectorAll('a');
const largeImg = document.getElementById('largeImg');

for (const item of list) {
  item.addEventListener('click', (event) => {
    largeImg.src = item.href;
    event.preventDefault();
  });
}
