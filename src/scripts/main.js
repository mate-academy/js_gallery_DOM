'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

function gallery(evt) {
  evt.preventDefault();

  if (evt.target.tagName === 'IMG') {
    const link = evt.target.closest('a');

    largeImg.src = link.href;
    largeImg.alt = evt.target.alt;
  }
}

thumbs.addEventListener('click', gallery);
