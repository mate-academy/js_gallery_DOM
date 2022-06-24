'use strict';

const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', replaceImg);

function replaceImg(click) {
  click.preventDefault();

  if (!click.target.closest('.list-item__link')) {
    return false;
  }

  const largeImg = document.querySelector('#largeImg');

  switch (click.target.tagName) {
    case 'A':
      largeImg.src = click.target.src;
      break;
    case 'IMG':
      largeImg.src = click.target.parentElement.href;
      break;
  }
}
