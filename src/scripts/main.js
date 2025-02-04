'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const imgList = document.querySelector('.gallery__list');

const switchImg = () => {
  event.preventDefault();

  const target = event.target.closest('a');

  if (!target) {
    return;
  }

  const newImg = target.getAttribute('href');

  mainImg.setAttribute('src', newImg);
};

imgList.addEventListener('click', switchImg);
