'use strict';

const largeImg = document.getElementById('largeImg');
const imagesList = document.getElementById('thumbs');

imagesList.addEventListener('click', (click) => {
  click.preventDefault();

  const item = click.target.closest('a');

  largeImg.src = item.href;
});
