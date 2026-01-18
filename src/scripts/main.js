'use strict';

const parentTarget = document.querySelector('.gallery');
const bigImage = document.querySelector('img#largeImg');

parentTarget.addEventListener('click', (eventNode) => {
  const anchor = eventNode.target.closest('a');

  if (!anchor) {
    return;
  }

  eventNode.preventDefault();

  bigImage.src = anchor.href;
});
