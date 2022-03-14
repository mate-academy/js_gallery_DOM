'use strict';

const currentMainImage = document.getElementById('largeImg');

let targetImage;

const eventElem = document.getElementById('thumbs');

eventElem.addEventListener('click', function(ourEvent) {
  const nearestLink = ourEvent.target.closest('a');

  nearestLink.preventDefault();

  targetImage = ourEvent.target;
  currentMainImage.src = targetImage.src;
});
