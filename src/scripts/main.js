'use strict';

const imageList = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

imageList.addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  target = target.parentElement;
  largeImage.src = target.href;
});
