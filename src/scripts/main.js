'use strict';

const thumb = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

const newImg = (click) => {
  const img = click.target;

  click.preventDefault();
  largeImg.src = img.parentElement.href;
};

thumb.addEventListener('click', newImg);
