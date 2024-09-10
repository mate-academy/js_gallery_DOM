'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsUl = document.getElementById('thumbs');

thumbsUl.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (link) {
    largeImg.src = link.href;
  }
});
