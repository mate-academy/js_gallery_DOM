'use strict';

const clickableImagesList = document.getElementById('thumbs');

const largeImage = document.getElementById('largeImg');

clickableImagesList.addEventListener('click', (eventOnClick) => {
  // Prevent browser from navigating to the href
  eventOnClick.preventDefault();

  // Had some troubles with this.
  /*
    At first i've done this:
    src = eventOnClick.target.getAttribite('src');
  */
  const src = eventOnClick.target.closest('.list-item__link').href;

  largeImage.src = src;
});
