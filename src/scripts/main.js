'use strict';

const thumbs = document.querySelector('#thumbs');

const oldImg = document.querySelector('.gallery__large-img');

thumbs.addEventListener('click', () => {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    oldImg.setAttribute('src', event.target.getAttribute('href'));
  } else {
    const closest = event.target.closest('.list-item__link');

    oldImg.setAttribute('src', closest.getAttribute('href'));
  }
});
