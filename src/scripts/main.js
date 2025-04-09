'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const miniImgs = document.querySelector('ul#thumbs');

miniImgs.onclick = () => {
  event.preventDefault();

  let link;

  if (event.target.tagName === 'IMG') {
    link = event.target.parentElement;
  } else {
    link = event.target;
  }

  mainImage.src = link.href;
};
