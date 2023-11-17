'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('.list-item');

  if (listItem || list.contains(listItem)) {
    const newSrc = listItem.querySelector('.list-item__link').href;

    largeImg.src = newSrc;
  }
});
