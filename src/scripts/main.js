'use strict';

const smallImg = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

smallImg.addEventListener('click', (i) => {
  i.preventDefault();

  const link = i.target.closest('.list-item__link');

  mainImg.src = link.href;
});
