'use strict';

const thumbs = document.querySelector('#thumbs');

const oldImg = document.querySelector('.gallery__large-img');

thumbs.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.tagName === 'A') {
    oldImg.setAttribute('src', clickEvent.target.getAttribute('href'));
  } else {
    const closest = clickEvent.target.closest('.list-item__link');

    oldImg.setAttribute('src', closest.getAttribute('href'));
  }
});
