'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (eve) => {
  eve.preventDefault();

  const listItemLink = eve.target.closest('.list-item__link');

  largeImg.src = listItemLink.href;
});
