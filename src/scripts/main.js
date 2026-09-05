'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imgContainer = document.querySelector('.gallery');

imgContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const clickedLink = event.target.closest('a');

  if (!clickedLink) {
    return;
  }

  largeImg.src = clickedLink.href;
});
