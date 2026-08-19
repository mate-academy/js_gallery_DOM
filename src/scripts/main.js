'use strict';

const thumbsContainer = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsContainer.addEventListener('click', (n) => {
  const link = n.target.closest('a');

  if (!link || !thumbsContainer.contains(link)) {
    return;
  }

  n.preventDefault();

  largeImg.src = link.href;
});
