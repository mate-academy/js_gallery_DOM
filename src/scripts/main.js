'use strict';

const listImage = document.querySelector('ul');
const getIdMain = document.getElementById('largeImg');

listImage.addEventListener('click', (e) => {
  e.preventDefault();

  let targetEl = e.target;

  if (targetEl.tagName === 'IMG') {
    targetEl = targetEl.parentElement;
  }
  getIdMain.src = targetEl.href;
});
