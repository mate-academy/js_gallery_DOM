'use strict';

const list = document.getElementById('thumbs');

list.addEventListener('click', (event) => {
  const newSrc = event.target.parentElement.href;

  event.preventDefault();
  document.getElementById('largeImg').src = newSrc;
});
