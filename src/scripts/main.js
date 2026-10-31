'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const target = clickEvent.target;

  const img = target.tagName === 'IMG' ? target : target.querySelector('img');

  if (!img) {
    return;
  }

  largeImg.src = img.src;
});
