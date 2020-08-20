'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.querySelectorAll('.list-item__link');

for (const link of list) {
  link.onclick = event => {
    event.preventDefault();

    largeImg.src = link.href;
  };
}
