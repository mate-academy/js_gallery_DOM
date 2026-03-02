'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (evt) {
  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  if (!thumbs.contains(link)) {
    return;
  }

  evt.preventDefault();

  const newSrc = link.getAttribute('href');

  largeImg.setAttribute('src', newSrc);
});
