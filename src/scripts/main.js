'use strict';

const menu = document.getElementById('thumbs');
const mainPic = document.getElementById('largeImg');

menu.addEventListener('click', (e) => {
  e.preventDefault();

  const closestHref = e.target.closest('a');

  mainPic.src = closestHref.href;
});
