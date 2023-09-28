'use strict';

const largeImg = document.getElementById('largeImg');
const thumbnailList = document.getAnimations('thumbs');

thumbnailList.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.tagName === 'A' || clickEvent.target === 'IMG') {
    clickEvent.preventDefault();

    const anchorElement = clickEvent.target.tagName === 'A'

      ? clickEvent.target : clickEvent.target.parentElement;

    const newImgUrl = anchorElement.target.getAttribute('href');

    largeImg.setAttribute('src', newImgUrl);
  }
});
