'use strict';

const largeImg = document.querySelector('#largeImg');
const imageList = document.querySelector('#thumbs');

function imgChanger(eventObject) {
  eventObject.preventDefault();

  const link = eventObject.target.closest('.list-item__link');

  if (!link || !imageList.contains(link)) {
    return;
  };

  largeImg.src = link.getAttribute('href');
}

imageList.addEventListener('click', imgChanger);
