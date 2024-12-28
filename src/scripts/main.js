'use strict';

const thumbs = document.getElementById('thumbs');

const mainImage = document.getElementById('largeImg');

function changeImg(e) {
  e.preventDefault();

  const link = e.target.closest('a');

  if (link) {
    mainImage.src = link.href;
  }
}

thumbs.addEventListener('click', changeImg);
