'use strict';

const galleryList = document.querySelector('.gallery ul');
const main = document.querySelector('img#largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const value = e.target.parentElement.href;

    main.src = value;
  } else if (e.target.tagName === 'A') {
    const value = e.target.href;

    main.src = value;
  }
});
