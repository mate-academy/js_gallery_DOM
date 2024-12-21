'use strict';

const listWithImg = document.getElementById('thumbs');
const mainImg = document.querySelector('.gallery__large-img');

listWithImg.addEventListener('click', clickToImg);

function clickToImg(dataOfEvent) {
  const linkWithImg = dataOfEvent.target.closest('.list-item__link');

  if (linkWithImg) {
    mainImg.src = linkWithImg.href;
  }

  dataOfEvent.preventDefault();
}
