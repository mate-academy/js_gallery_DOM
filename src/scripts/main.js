'use strict';

const thumbs = document.getElementsByClassName('list-item__link');
const bigImg = document.querySelector('#largeImg');

for (const link of thumbs) {
  link.addEventListener('click', eve => {
    eve.preventDefault();
    bigImg.src = link.href;
  });
}
