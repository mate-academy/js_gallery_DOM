'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const large = document.getElementById('largeImg');

  if (!thumbs || !large){
    return;
  }

  thumbs.addEventListener('click', (e) => {
    const link = e.target.closest('.list-item__link');

    if (!link) {
      return;
    }
    e.preventDefault();

    const newSrc = link.getAttribute('href');
    const img = link.querySelector('img');
    const imgAlt = img?.alt || '';

    large.setAttribute('src', newSrc);
    large.setAttribute('alt', imgAlt);
  });
});
