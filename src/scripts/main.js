'use strict';

const largeImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();

    largeImage.src = link.href;
  }
});
