'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', function (e) {
    e.preventDefault();

    const link = e.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    largeImg.src = link.href;
    largeImg.alt = link.title;
  });
});
