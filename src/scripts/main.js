'use strict';

const largeImg = document.getElementById('largeImg');
const listImage = document.querySelector('ul');

listImage.addEventListener('click', (item) => {
  item.preventDefault();

  let targetEl = item.target;

  if (targetEl.tagName === 'IMG') {
    targetEl = targetEl.parentElement;
  }
  largeImg.src = targetEl.href;
});
