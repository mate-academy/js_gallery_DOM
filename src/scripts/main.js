'use strict';

const mainImg = document.querySelector('.gallery__large-img');

document.addEventListener('click', (e) => {
  const thumbLink = e.target.closest('.list-item__link');

  if (thumbLink !== null) {
    mainImg.src = thumbLink.href;
    e.preventDefault();
  }
});
