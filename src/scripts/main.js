'use strict';

const imgList = document.querySelector('ul');

imgList.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('.list-item__link');

  if (listItem) {
    document.getElementById('largeImg').src = listItem.href;
  }
});
