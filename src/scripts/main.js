'use strict';

const mainImage = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();
  mainImage.src = clickEvent.target.parentElement.href;
});
