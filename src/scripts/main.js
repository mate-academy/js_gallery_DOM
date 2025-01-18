'use strict';

const images = [...document.querySelectorAll('a')];
const mainImage = document.querySelector('#largeImg');

function changeImage(e, image) {
  e.preventDefault();
  mainImage.src = image.href;
}

images.map((image) => {
  image.addEventListener('click', (e) => changeImage(e, image));
});
