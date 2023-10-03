'use strict';

const largeImg = document.getElementById('largeImg');
const thumbnailList = document.getElementById('thumbs');

thumbnailList.addEventListener('click', function(clickEvent) {
  clickEvent.preventDefault();

  const clickedElement = clickEvent.target.tagName === 'A'
    ? clickEvent.target : clickEvent.target.closest('a');

  if (clickedElement) {
    const newImgUrl = clickedElement.getAttribute('href');
    const newImgAlt = clickedElement.getAttribute('title');

    largeImg.src = newImgUrl; // Set the src attribute of the main image
    largeImg.alt = newImgAlt; // Set the alt attribute of the main image
  }
});
