'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const listOfImg = document.getElementById('thumbs');

listOfImg.addEventListener('click', (item) => {
  item.preventDefault();

  const value = item.target;

  if (!value) {
    return;
  }

  mainImg.src = value.parentElement.href;
});
