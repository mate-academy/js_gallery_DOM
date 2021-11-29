'use strict';

const bigImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

function changeImage(click) {
  click.preventDefault();

  const item = click.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  bigImg.src = item.href;
}

thumbs.addEventListener('click', changeImage);
