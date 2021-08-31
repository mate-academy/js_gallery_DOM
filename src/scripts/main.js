'use strict';

const images = document.querySelectorAll('.list-item');
const groupOfImages = document.getElementById('largeImg');
const newArr = [...images];

for (let i = 0; i < newArr.length; i++) {
  newArr[i].addEventListener('click', () => {
    const newPic = event.target.closest('.list-item__link');

    event.preventDefault();

    if (!newPic.classList.contains('list-item__link')) {
      return;
    }

    groupOfImages.src = newPic.href;
  });
};
