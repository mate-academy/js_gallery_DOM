'use strict';

const pictureList = document.getElementById('thumbs');
const mainPicture = document.getElementById('largeImg');

pictureList.addEventListener('click', (eventTrigger) => {
  eventTrigger.preventDefault();
  mainPicture.src = `${eventTrigger.target.parentNode.href}`;
});
