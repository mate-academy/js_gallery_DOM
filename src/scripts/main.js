'use strict';

const pictures = document.querySelectorAll('.list-item__link');
const valide = document.getElementById('largeImg');

for (const picture of pictures) {
  picture.addEventListener('click', (even) => {
    even.preventDefault();

    const item = even.target.closest('.list-item__link');

    valide.src = item.children[0].src;
  });
}
