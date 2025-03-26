'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mainTmage = document.getElementById('largeImg');
  const container = document.getElementById('thumbs');

  container.addEventListener('click', (events) => {
    const target = events.target;

    if (target.tagName === 'IMG') {
      const parentLink = target.parentElement;

      if (parentLink && parentLink.tagName === 'A') {
        events.preventDefault();
        mainTmage.src = parentLink.href;
      }
    }
  });
});
