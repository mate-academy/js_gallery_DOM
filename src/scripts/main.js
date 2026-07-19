'use strict';

const thumbsContainer = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsContainer.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();
    largeImg.src = link.href;
    largeImg.alt = link.title;
  }
});
