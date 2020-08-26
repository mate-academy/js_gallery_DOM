'use strict';

const img = document.querySelectorAll('.list-item__link');

const bigImg = document.getElementById('largeImg');

for (const a of img) {
  a.addEventListener('click', (event) => {
    event.preventDefault();
    bigImg.src = a.href;
  });
}
