'use strict';

const pictures = document.querySelectorAll('.list-item__link');
const mainImage = document.getElementById('largeImg');

pictures.forEach(picture => {
  picture.addEventListener('click', (e) => {
    e.preventDefault();

    const item = e.target.closest('.list-item__link');

    mainImage.src = item.children[0].src;
  });
});
