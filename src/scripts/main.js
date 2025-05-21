'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (imageClick) => {
  imageClick.preventDefault();

  const link = imageClick.target.closest('a');

  if (!link || !gallery.contains(link)) {
    return;
  }

  largeImg.src = link.href;
});
