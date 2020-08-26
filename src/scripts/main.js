'use strict';

const largeImage = document.getElementById('largeImg');
const imageList = document.querySelector('.gallery__list');

const imageChanger = (event) => {
  event.preventDefault();
  largeImage.src = event.target.closest('A').href;
};

imageList.addEventListener('click', imageChanger);
