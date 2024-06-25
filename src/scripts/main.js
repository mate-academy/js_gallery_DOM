'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (thumbs.contains(link)) {
    largeImg.src = link.href;
    largeImg.alt = link.title;
  }
});
