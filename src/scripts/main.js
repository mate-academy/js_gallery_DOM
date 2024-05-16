'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbs = document.getElementById('thumbs');

function changeImage(e) {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    mainImage.src = e.target.parentElement.href;
  } else if (e.target.tagName === 'A') {
    mainImage.src = e.target.href;
  }
}

thumbs.addEventListener('click', changeImage);
