'use strict';

window.onload = () => {
  const largeImg = document.getElementById('largeImg');

  largeImg.height = parseInt(window.getComputedStyle(largeImg).height);

  document.querySelector('.gallery__list').onclick = (event) => {
    event.preventDefault();
    largeImg.src = event.target.src;
  };
};
