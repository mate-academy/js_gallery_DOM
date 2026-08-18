'use strict';

const galleryList = document.querySelector('.gallery ul');
const main = document.querySelector('img#largeImg');

galleryList.addEventListener('click', () => {
  event.preventDefault();

  if (event.target.tagName === 'IMG') {
    const value = event.target.parentElement.href;

    main.src = value;
  } else if (event.target.tagName === 'A') {
    const value = event.target.href;

    main.src = value;
  }
});
