'use strict';

const largeImg = document.getElementById('largeImg');
const imageElement = document.querySelector('.gallery');

const targetImage = (e) => {
  e.preventDefault();

  const target = e.target;

  if (target.tagName === 'IMG') {
    const link = target.closest('.list-item__link');

    if (link) {
      largeImg.src = link.href;
    }
  }
};

imageElement.addEventListener('click', targetImage);
