'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  if (!gallery) {
    return;
  }

  const bigImage = gallery.querySelector('#largeImg');
  const thumbs = document.querySelector('#thumbs');

  if (!bigImage || !thumbs) {
    return;
  }

  thumbs.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) {
      return;
    }
    e.preventDefault();

    const thumbImg =
      e.target.tagName === 'IMG' ? e.target : link.querySelector('img');

    bigImage.src = link.href || (thumbImg && thumbImg.src) || bigImage.src;

    if (thumbImg && thumbImg.srcset) {
      bigImage.srcset = thumbImg.srcset;
    } else {
      bigImage.removeAttribute('srcset');
    }
  });
});
