'use strict';

document.getElementById('thumbs').addEventListener('click', (eve) => {
  const links = eve.target.closest('a');

  if (!links) {
    return;
  }

  const largeImgsrc = links.getAttribute('href');

  const largeImg = document.getElementById('largeImg');

  largeImg.setAttribute('src', largeImgsrc);
  eve.preventDefault();
});
