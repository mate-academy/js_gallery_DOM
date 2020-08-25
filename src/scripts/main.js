'use strict';

window.addEventListener('load', slider());

function slider() {
  const list = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  largeImg.height = parseInt(window.getComputedStyle(largeImg).height);

  list.addEventListener('click', (event) => {
    event.preventDefault();
    largeImg.src = event.target.src;
  });
}
