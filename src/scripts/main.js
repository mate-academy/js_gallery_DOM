'use strict';

const thumbsContainer = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const clickedLink = e.target.closest('a');

  if (!clickedLink) {
    return;
  }

  largeImg.src = clickedLink.href;

  thumbsContainer
    .querySelectorAll('a')
    .forEach((a) => a.classList.remove('active'));
  clickedLink.classList.add('active');
});
