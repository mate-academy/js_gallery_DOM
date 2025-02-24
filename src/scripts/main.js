'use strict';

window.onload = () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (even) => {
    even.preventDefault();

    let target = even.target;

    while (target !== thumbs) {
      if (target.tagName === 'IMG') {
        const link = target.closest('a');

        if (link) {
          largeImg.src = link.href;
          largeImg.alt = link.title;
        }

        return;
      }

      target = target.parentNode;
    }
  });
};
