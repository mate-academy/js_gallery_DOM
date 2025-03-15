'use strict';

const largeImg = document.getElementById('largeImg');

document.getElementById('thumbs').addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  target = target.parentElement;

  largeImg.src = target.href;
});
