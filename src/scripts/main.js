'use strict';

const items = document.querySelectorAll('.list-item');
const image = document.querySelector('#largeImg');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', (e) => {
    e.preventDefault();

    switch (i) {
      case 0: image.src = './images/landscape-first.png';
        break;
      case 1: image.src = './images/landscape-second.png';
        break;
      case 2: image.src = './images/landscape-third.png';
        break;
      case 3: image.src = './images/landscape-fourth.png';
        break;
      case 4: image.src = './images/landscape-fifth.png';
        break;
    };
  });
}
