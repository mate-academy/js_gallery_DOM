'use strict';

const imageList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');

for (const link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

imageList.addEventListener('click', (event) => {
  const image = event.target.closest('.gallery__img');

  largeImage.src = image.parentElement.href;
});
