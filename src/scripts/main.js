'use strict';

const changeImg = () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  if (!largeImg || !thumbs) {
    return;
  }

  thumbs.addEventListener('click', (evt) => {
    if (!(evt.target instanceof Element)) {
      return;
    }

    const link = evt.target.closest('a');

    if (!link) {
      return;
    }
    evt.preventDefault();

    const relativeSrc = link.getAttribute('href');
    const absoluteSrc = new URL(relativeSrc, window.location.origin).href;

    largeImg.src = absoluteSrc;
  });
};

document.addEventListener('DOMContentLoaded', changeImg);
