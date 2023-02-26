'use strict';

const largeImg = document.getElementById('largeImg');
const listItems = document.querySelectorAll('.list-item');

listItems.forEach((listItem) => {
  // eslint-disable-next-line no-shadow
  listItem.addEventListener('click', (event) => {
    event.preventDefault();

    const imgSrc = event.target.closest('.list-item__link').href;

    largeImg.src = imgSrc;
  });
});
