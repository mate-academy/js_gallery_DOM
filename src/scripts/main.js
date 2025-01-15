'use strict';

const mainImg = document.querySelector('.gallery__large-img');

const list = document.getElementById('thumbs');

list.addEventListener('click', function () {
  if (event.target.closest('.list-item__link')) {
    event.preventDefault();
    mainImg.src = event.target.closest('.list-item__link').href;
  }
});
