'use strict';

const images = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

images.addEventListener('click', (even) => {
  even.preventDefault();

  const link = even.target.closest('a');

  if (!link || !images.contains(link)) {
    return;
  }

  const largeImgSrc = link.getAttribute('href');

  largeImg.src = new URL(largeImgSrc, location.origin).href;
});
