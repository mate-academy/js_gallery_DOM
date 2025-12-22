'use strict';

const imageUl = document.querySelector('#thumbs');
const bigImage = document.querySelector('#largeImg');

imageUl.addEventListener('click', () => {
  event.preventDefault();
  bigImage.src = `/images/landscape-${event.target.src.split('-')[1]}.png`;
});
