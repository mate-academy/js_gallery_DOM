'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImgToChange = document.querySelectorAll('.list-item__link');

for (const i of smallImgToChange) {
  i.addEventListener('click', (e) => {
    e.preventDefault();

    largeImg.src = i.href;
  });
}
