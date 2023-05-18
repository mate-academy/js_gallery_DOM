'use strict';

const mainImageBlock = document.querySelector('.gallery div');
const mainImage = mainImageBlock.firstElementChild;
const listItems
  = document.querySelectorAll('.gallery__list .list-item');

for (const listItem of listItems) {
  const imgListItem = listItem.querySelector('.list-item__link .gallery__img');

  listItem.addEventListener('click', (EVENT) => {
    EVENT.preventDefault();

    const littleImgSrc = imgListItem.getAttribute('src');
    const largeImg = document.createElement('img');

    largeImg.id = mainImage.id;

    largeImg.src = './images'
      + littleImgSrc.substring(0, littleImgSrc.lastIndexOf('-'))
      + '.png';
    largeImg.alt = mainImage.alt;
    largeImg.className = mainImage.className;

    mainImageBlock.firstElementChild.remove();
    mainImageBlock.append(largeImg);
  });
}
