'use strict';

const largeImg = document.querySelector('#largeImg');
const linkList = document.querySelectorAll('.list-item__link');

for (const key of linkList) {
  key.onclick = (event) => {
    event.preventDefault();

    largeImg.src = key.href;
  };
}
