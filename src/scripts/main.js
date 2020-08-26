'use strict';

const image = document.getElementById('largeImg');

document.querySelector('.gallery').onclick = (event) => {
  event.preventDefault();
  image.src = event.target.closest('.list-item__link').href;
};
