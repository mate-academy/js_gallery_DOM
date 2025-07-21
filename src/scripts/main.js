'use strict';

const imageBoss = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (events) => {
  const targetImg = events.target.closest('img');
  const targetLink = events.target.closest('a');

  if (targetImg) {
    const largeImg = targetImg.parentNode.href;

    imageBoss.src = largeImg;
    events.preventDefault();
  } else if (targetLink) {
    const largeImg = targetLink.href;

    imageBoss.src = largeImg;
    events.preventDefault();
  }
});
