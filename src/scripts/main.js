'use strict';

const divEl = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

divEl.addEventListener('click', (e) => {
  const aEl = e.target.closest('a').getAttribute('href');

  largeImg.src = aEl;
  e.preventDefault();
});
