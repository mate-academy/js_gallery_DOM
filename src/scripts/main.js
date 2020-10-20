'use strict';

const imageLinks = document.querySelectorAll('.list-item__link');
const largeImg = document.getElementById('largeImg');

for (const imgLink of imageLinks) {
  imgLink.addEventListener('click', (event) => {
    event.preventDefault();

    largeImg.src = imgLink.href;
  });
}
