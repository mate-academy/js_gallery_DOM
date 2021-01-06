'use strict';

const large = document.getElementById('largeImg');
const small = document.querySelectorAll('.list-item__link');

for (const img of small) {
  img.addEventListener('click', (x) => {
    x.preventDefault();

    large.src = img.href;
  });
}
