'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsList = document.getElementById('thumbs');

thumbsList.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('a');

  if (target) {
    largeImg.src = target.href;
  }
});
