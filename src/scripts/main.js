'use strict';

const mainPicture = document.getElementById('largeImg');
const container = document.getElementById('thumbs');

container.addEventListener('click', (evt) => {
  evt.preventDefault();

  let target = evt.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  const link = target.getAttribute('href');

  mainPicture.setAttribute('src', link);
});
