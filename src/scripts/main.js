'use strict';

const largeImage = document.getElementById('largeImg');

for (const link of document.querySelectorAll('.list-item__link')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    largeImage.src = link.href;
  });
}
