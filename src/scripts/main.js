'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', function(event) {
  event.preventDefault();

  let target = event.target;
  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  if (target.tagName !== 'A') {
    return;
  }

  const newSrc = target.getAttribute('href');
  const newTitle = target.getAttribute('title');

  largeImage.src = newSrc;
  largeImage.title = newTitle;
});
