'use strict';

const mainImg = document.getElementById('largeImg');
const images = [...document.querySelectorAll('.gallery__thumb')];
const links = [...document.querySelectorAll('.list-item__link')]

images.forEach(img => img.addEventListener('click', (event) => {
  const eventImg = event.currentTarget.src;
  mainImg.src = eventImg;
}))

links.forEach(link => link.addEventListener('click', (event) => {
  event.preventDefault();
  mainImg.src = event.currentTarget.href;
}))

