'use strict';

const a = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

a.addEventListener('click', (e) => {
  e.preventDefault();
  bigImg.src = e.target.src;
});
