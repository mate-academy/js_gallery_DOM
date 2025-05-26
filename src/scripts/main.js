'use strict';

const listItems = document.querySelectorAll('.list-item');
const largeImg = document.getElementById('largeImg');

listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    largeImg.src = item.querySelector('.list-item__link').href;
  });
});
