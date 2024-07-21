'use strict';

const thumbList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

thumbList.addEventListener('click', showImage);

function showImage(e) {
  e.preventDefault();

  const target = e.target;

  if (target.className.includes('gallery__thumb')) {
    const thumbUrl = target.src;

    largeImage.src = getLargeImgUrl(thumbUrl);
  }
}

function getLargeImgUrl(thumbUrl) {
  const thumbUrlParts = thumbUrl.split('/');
  const nameThumbFile = thumbUrlParts[thumbUrlParts.length - 1].split('.')[0];

  return `images/${nameThumbFile.replace('-thumb', '')}.png`;
}
