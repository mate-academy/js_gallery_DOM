'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.closest('a');
    }

    if (target && target.tagName === 'A') {
      const href = target.getAttribute('href');

      // I begged ChatGPT to help me fix test's issue and it offered this:
      const absoluteUrl = new URL(href, window.location.origin).href;

      largeImg.src = absoluteUrl;
    }
  });
});
