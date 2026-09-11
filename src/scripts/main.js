'use strict';

const thumbsContainer = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsContainer.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  if (!thumbsContainer.contains(link)) {
    return;
  }

  e.preventDefault();

  const newImageSrc = link.href;
  const newImageAlt = link.getAttribute('title');

  largeImg.setAttribute('src', newImageSrc);

  if (newImageAlt) {
    largeImg.setAttribute('alt', newImageAlt);
  }
});
