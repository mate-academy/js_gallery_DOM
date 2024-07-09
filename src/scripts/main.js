'use strict';

const largeImg = document.getElementById('largeImg');
const parentList = document.getElementById('thumbs');

parentList.addEventListener('click', (evt) => {
  evt.preventDefault();

  const link = evt.target.closest('.list-item__link');

  largeImg.src = link.href;
});
