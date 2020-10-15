'use strict';

const List = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

List.addEventListener('click', (event) => {
  event.preventDefault();

  const element = event.target.closest('.list-item__link');

  largeImg.src = element.href;
});
