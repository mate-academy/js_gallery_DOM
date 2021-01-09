'use strict';

const imgMain = document.querySelector('#largeImg');

const imgCollection = document.querySelectorAll('.list-item__link');

for (const image of imgCollection) {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    imgMain.src = e.currentTarget.href;
  });
}
