'use strict';

const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  let bigImg = document.querySelector('#largeImg');

  e.preventDefault();

  bigImg.src = e.target.closest('.list-item__link').href;
});
