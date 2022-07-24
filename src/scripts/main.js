'use strict';

const largeimgRef = document.querySelector('#largeImg');
const galeryListRef = document.querySelector('#thumbs');

function handlerSerchImg(e) {
  e.preventDefault();

  const item = e.target;

  if (!item.classList.contains('gallery__img')) {
    return;
  }

  largeimgRef.src = item.src;
}

galeryListRef.addEventListener('click', handlerSerchImg);
