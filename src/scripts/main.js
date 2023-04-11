'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (item) => {
  item.preventDefault();

  largeImg.src = item.target.parentNode.href;
});
