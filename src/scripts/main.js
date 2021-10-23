'use strict';

const thumb = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

const changeImg = (click) => {
  const img = click.target;

  click.preventDefault();
  mainImg.src = img.parentElement.href;
};

thumb.addEventListener('click', changeImg);
