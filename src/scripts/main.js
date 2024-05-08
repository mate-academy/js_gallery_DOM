/* eslint-disable no-shadow */
'use strict';

const element = document.querySelector('ul');
const largeImg = document.querySelector('#largeImg');

element.addEventListener('click', (event) => {
  event.preventDefault();

  largeImg.src = event.target.closest('a').href;
});
