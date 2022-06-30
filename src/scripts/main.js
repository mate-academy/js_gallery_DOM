'use strict';

const list = document.querySelector('ul');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (currentEvent) => {
  currentEvent.preventDefault();

  largeImg.src = currentEvent.target.parentElement.href;
});
