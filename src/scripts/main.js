'use strict';

const list = document.querySelector('.gallery__list'); // ul

const bigImg = document.getElementById('largeImg');

list.addEventListener('click', (obj) => {
  const link = obj.target.parentElement.href; // ссылка a.href

  bigImg.setAttribute('src', link);

  obj.preventDefault();
});
