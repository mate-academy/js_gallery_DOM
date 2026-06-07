'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', changeImg);

function changeImg(ev) {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }
  event.preventDefault();
  largeImg.src = link.href;
}
