'use strict';

const largeImg = document.getElementById('largeImg');
const parentList = document.getElementById('thumbs');

parentList.addEventListener('click', (evt) => {
  if (evt.target) {
    evt.preventDefault();
    largeImg.setAttribute('src', evt.target.src);
  }
});
