'use strict';

const images = [...document.getElementsByClassName('list-item')];
const mainImage = document.getElementById('largeImg');

images.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    mainImage.setAttribute('src', e.target.getAttribute('src'));
  });
});
