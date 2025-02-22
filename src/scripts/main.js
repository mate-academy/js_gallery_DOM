'use strict';

const thumbs = document.querySelector('#thumbs');

const mainImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', (events) => {
  events.preventDefault();

  let target = events.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const newSrc = target.getAttribute('href');

    mainImage.src = newSrc;
  }
});
