'use strict';

const listItem = document.querySelectorAll('.list-item');
const mainPicture = document.querySelector('#largeImg');

listItem.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    mainPicture.src = item.children[0].href;
  });
});
