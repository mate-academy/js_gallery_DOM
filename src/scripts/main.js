'use strict';

const thumbsContainer = document.getElementById('thumbs');

thumbsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const newSrc = target.getAttribute('href');
    const absoluteUrl = new URL(newSrc, window.location.origin).href;

    const largeImg = document.getElementById('largeImg');

    largeImg.setAttribute('src', absoluteUrl);
  }
});
