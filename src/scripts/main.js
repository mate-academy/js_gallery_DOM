'use strict';

const largeImg = document.querySelector('#largeImg');
const ul = document.querySelector('#thumbs');

ul.onclick = (innerEvent) => {
  innerEvent.preventDefault();
};

const thumbToMainOnClick = (innerEvent) => {
  const target = innerEvent.target.closest('.list-item__link');

  if (!target || !ul.contains(target)) {
    return;
  }

  largeImg.src = target.href;
};

ul.addEventListener('click', thumbToMainOnClick);
