'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  if (!thumbs || !largeImg) {
    return;
  }

  thumbs.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    const img = link.querySelector('img');

    if (!img) {
      return;
    }

    const href = link.getAttribute('href');

    if (!href) {
      return;
    }

    e.preventDefault();

    largeImg.setAttribute('src', href);

    const alt = img.getAttribute('alt') || '';

    largeImg.setAttribute('alt', alt);
  });
});
