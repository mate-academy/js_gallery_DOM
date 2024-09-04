'use strict';

const largeImg = document.getElementById('largeImg');
const linkList = document.getElementsByClassName('list-item__link');

const linkListArray = [...linkList];

for (const link of linkListArray) {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    switch (link.title) {
      case 'Image 1':
        largeImg.src = './images/landscape-first.png';
        break;
      case 'Image 2':
        largeImg.src = './images/landscape-second.png';
        break;
      case 'Image 3':
        largeImg.src = './images/landscape-third.png';
        break;
      case 'Image 4':
        largeImg.src = './images/landscape-fourth.png';
        break;
      case 'Image 5':
        largeImg.src = './images/landscape-fifth.png';
        break;
      default:
        largeImg.src = '';
    }
  });
}
