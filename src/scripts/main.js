'use strict';

const imageList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

imageList.addEventListener('click', (eventEl) => {
  const targetElement = eventEl.target.closest('.list-item__link');

  eventEl.preventDefault();

  largeImg.src = targetElement.href;
});
