'use strict';

const gallary = document.querySelector('.gallery');
const mainImg = document.querySelector('.gallery__large-img');

gallary.addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target;

  mainImg.src = target.closest('a').href;
});
