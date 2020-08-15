'use strict';

const listUl = document.querySelector('ul');
const largeImgId = document.getElementById('largeImg');

const listU = (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item');

  if (!item || !listUl.contains(item)) {
    return;
  }

  largeImgId.setAttribute('src', item.querySelector('a').getAttribute('href'));
};

listUl.addEventListener('click', listU);
