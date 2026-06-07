'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', changeImg);

function changeImg(ev) {
  const link = ev.target.closest('a');

  if (!link) {
    return;
  }
  ev.preventDefault();
  largeImg.src = link.href;
}
