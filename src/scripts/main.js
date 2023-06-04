'use strict';
const list = document.getElementById('thumbs');
const bigItem = document.getElementById('largeImg');


list.addEventListener('click', (event) => {
  event.preventDefault();
  const currentItemSrc = event.target.src;
  console.log(currentItemSrc);

  bigItem.src = currentItemSrc;
})