'use strict';

const bigImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

function changeImage(click) {
  const img = click.target;

  click.preventDefault();
  bigImg.src = img.parentElement.href;
}

thumbs.addEventListener('click', changeImage);
