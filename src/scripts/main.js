'use strict';

const currentMainImage = document.getElementById('largeImg');

let targetImage;

const eventElem = document.getElementById('thumbs');

eventElem.addEventListener('click', function(ourEvent) {
  ourEvent.preventDefault();

  const ourTarget = ourEvent.target.closest('a');

  if (!ourTarget) {
    return;
  }

  if (!eventElem.contains(ourTarget)) {
    return;
  }

  targetImage = ourEvent.target;
  currentMainImage.src = targetImage.src;
});
