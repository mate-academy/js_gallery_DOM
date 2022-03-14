'use strict';

const currentMainImage = document.getElementById('largeImg');

let targetImage;

const eventElem = document.getElementById('thumbs');

alert(currentMainImage.src);

eventElem.addEventListener('click', function(ourEvent) {
  targetImage = ourEvent.target;
  currentMainImage.src = targetImage.src;
});
