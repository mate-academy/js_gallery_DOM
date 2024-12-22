'use strict';

const list = document.querySelector('#thumbs');

list.onclick = function (item) {
  const target = item.target;
  const largeImg = document.querySelector('#largeImg');

  if (target.tagName !== 'IMG') {
    return;
  }

  largeImg.src = target.src;

  return false;
};
