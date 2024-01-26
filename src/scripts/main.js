'use strict';

function selectImage(e) {
  e.preventDefault();

  const link = e.target.closest('a');

  if (link) {
    const largeImgElement = document.getElementById('largeImg');

    largeImgElement.src = link.href;
  }
}

const list = document.querySelector('.gallery__list');

list.addEventListener('click', selectImage);
