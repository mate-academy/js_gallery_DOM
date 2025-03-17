'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.onclick = (e) => {
  const landscape = e.target.closest('a');

  if (!landscape) {
    return;
  }

  showThumbnail(landscape.href, landscape.title);
  e.preventDefault();
};

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
