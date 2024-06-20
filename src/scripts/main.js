'use strict';

const thumbsContainer = document.getElementById('thumbs');

thumbsContainer.addEventListener('click', (ev) => {
  ev.preventDefault();

  let target = ev.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const mainImg = document.getElementById('largeImg');
    const newSrc = target.getAttribute('href');

    mainImg.setAttribute('src', newSrc);
  }
});
