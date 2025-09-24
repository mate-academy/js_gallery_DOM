'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (evt) => {
  evt.preventDefault();

  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  const relativeSrc = link.getAttribute('href');
  const absoluteSrc = new URL(relativeSrc, window.location.origin).href;

  largeImg.src = absoluteSrc;
});
