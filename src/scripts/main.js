'use strict';

const mainImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  e.preventDefault();

  if (link) {
    mainImg.setAttribute('src', `${link.href}`);
  }
});
