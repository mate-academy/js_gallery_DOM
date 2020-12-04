'use strict';

const largeImg = document.getElementById('largeImg');
const imageList = document.querySelector('ul');

imageList.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.src = e.target.closest('.list-item__link').href;
});
