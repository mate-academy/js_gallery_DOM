'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('largeImg');
  const container = document.getElementById('thumbs');

  container.addEventListener('click', (e) => {
    const target = e.target;

    // If the clicked element is the <img>
    if (target.tagName === 'IMG' && target.parentElement.tagName === 'A') {
      e.preventDefault();
      mainImage.src = target.parentElement.href;
    }

    // If the clicked element is the <a> tag directly
    if (target.tagName === 'A' && target.href) {
      e.preventDefault();
      mainImage.src = target.href;
    }
  });
});
