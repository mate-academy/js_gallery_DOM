'use strict';

const gallaryImage = document.querySelector('#largeImg');
const gallaryList = document.querySelector('#thumbs');

const callback = (event) => {
  event.preventDefault();
  gallaryImage.src = event.target.closest('.list-item__link');
};

gallaryList.addEventListener('click', callback);
