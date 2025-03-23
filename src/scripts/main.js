'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

function changeLargeImg(e) {
  if (!(e instanceof Event)) {
    return;
  }

  e.preventDefault();

  const target = e.target;

  if (target.matches('.list-item__link')) {
    largeImg.setAttribute('src', target.href);
  } else if (target.matches('.gallery__thumb')) {
    largeImg.setAttribute('src', target.parentElement.href);
  }
}

thumbs.addEventListener('click', changeLargeImg);
