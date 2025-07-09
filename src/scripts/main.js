'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link || !list.contains(link)) {
    return;
  }

  const imgSrc = link.href;

  largeImg.src = imgSrc;
});
