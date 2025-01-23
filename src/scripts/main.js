'use strict';

const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  event.preventDefault();

  const currentElement = e.target;

  if (currentElement.tagName === 'IMG') {
    const parentLink = currentElement.parentElement;
    const largeImg = document.querySelector('#largeImg');

    largeImg.src = parentLink.href;
  }
});
