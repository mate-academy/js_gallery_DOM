'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (eve) => {
  eve.preventDefault();

  let link = null;

  if (eve.target.tagName === 'IMG') {
    link = eve.target.closest('a');
  }

  if (eve.target.tagName === 'A') {
    link = eve.target;
  }

  if (!link) {
    return;
  }

  const newSrc = link.getAttribute('href');
  const newAlt = link.getAttribute('title');

  largeImg.src = new URL(newSrc, document.baseURI).href;
  largeImg.alt = newAlt;
});
