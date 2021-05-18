'use strict';

const pictureList = document.getElementById('thumbs');
const mainPicture = document.getElementById('largeImg');

pictureList.addEventListener('click', (eventTrigger) => {
  eventTrigger.preventDefault();

  const targetLink = eventTrigger.target.closest('.list-item__link').href;

  mainPicture.src = targetLink;
});
