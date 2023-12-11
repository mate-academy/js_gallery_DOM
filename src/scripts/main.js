/* eslint-disable no-shadow */
'use strict';

const container = document.querySelector('.gallery');
const mainImg = document.getElementById('largeImg');

container.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;
  const targetSrc = target.getAttribute('src');

  mainImg.setAttribute('src', targetSrc);
});
