'use strict';

const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  const largeImg = document.querySelector('#largeImg');

  if (e.target.tagName === 'IMG') {
    const link = e.target.closest('a');

    largeImg.src = link.href;
  }

  if (e.target.tagName === 'A') {
    largeImg.src = e.target.href;
  }
  e.preventDefault();
});
