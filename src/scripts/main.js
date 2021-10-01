'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('ul');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();
  largeImg.src = ev.target.parentNode.href;
});
