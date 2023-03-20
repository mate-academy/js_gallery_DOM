'use strict';

const largeImg = document.querySelector('#largeImg');
const imageList = document.querySelector('#thumbs');

imageList.addEventListener('click', (eventElement) => {
  const targetElement = eventElement.target.closest('.list-item__link');

  largeImg.src = targetElement.href;

  eventElement.preventDefault();
});
