'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsList.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
    e.preventDefault();

    largeImg.src =
      e.target.tagName === 'IMG' ? e.target.parentNode.href : e.target.href;
  }
});
