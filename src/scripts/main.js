'use strict';

const allImg = document.querySelector('#thumbs');
const selectImg = document.querySelector('#largeImg');

allImg.addEventListener('click', (e) => {
  e.preventDefault();

  selectImg.src = e.target.src;
});
