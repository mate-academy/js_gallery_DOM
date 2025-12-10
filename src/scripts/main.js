'use strict';

const largeImage = document.getElementById('largeImg');

const thumbsContainer = document.getElementById('thumbs');

thumbsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const anchor = e.target.closest('a');

  if (!anchor) {
    return;
  }

  const newSrc = anchor.href;

  largeImage.src = newSrc;

  const currentActive = thumbsContainer.querySelector('.active');

  if (currentActive) {
    currentActive.classList.remove('active');
  }
  anchor.classList.add('active');
});
