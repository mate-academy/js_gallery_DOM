'use strict';

const largeImage = document.getElementById('largeImg');
const imageList = document.querySelector('.gallery__list');

imageList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target;

  if (item.classList.contains('list-item__link')) {
    return;
  }

  let newLink = './images/landscape-';
  const targetNumber = item.closest('.list-item__link').title;

  switch (targetNumber) {
    case 'Image 1':
      newLink += 'first.png';
      break;

    case 'Image 2':
      newLink += 'second.png';
      break;

    case 'Image 3':
      newLink += 'third.png';
      break;

    case 'Image 4':
      newLink += 'fourth.png';
      break;

    case 'Image 5':
      newLink += 'fifth.png';
      break;
  }

  largeImage.src = `${newLink}`;
});
