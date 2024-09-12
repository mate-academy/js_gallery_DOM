'use strict';

const ul = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

ul.addEventListener('click', (e) => {
  const a = e.target.closest('a');

  e.preventDefault();
  largeImg.setAttribute('src', a.href);
});
