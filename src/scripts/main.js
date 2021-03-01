'use strict';

const list = document.querySelector('ul');
const bigImage = document.getElementById('largeImg');

function changeImage(ev) {
  ev.preventDefault();

  const element = ev.target.closest('a');

  if (!element || !list.contains(element)) {
    return;
  }

  bigImage.src = element.href;
}

list.addEventListener('click', changeImage);
