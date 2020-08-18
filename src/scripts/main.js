'use strict';

const listUl = document.querySelector('ul');
const largeImgId = document.getElementById('largeImg');

const listU = (event) => {
  event.preventDefault();

  const item = event.target.closest('a');

  if (!item || !listUl.contains(item)) {
    return;
  }

  largeImgId.src = item;
};

listUl.addEventListener('click', listU);
