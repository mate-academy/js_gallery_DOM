'use strict';

const currentMainImage = document.getElementById('largeImg');

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

  currentMainImage.src = ourTarget.href;
});
