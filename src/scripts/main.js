'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsContainer = document.getElementById('thumbs');

thumbsContainer.addEventListener('click', function (e) {
  const clickedLink = e.target.closest('a');

  if (clickedLink) {
    e.preventDefault();

    const newLargeImgSrc = clickedLink.href;
    const thumbnailImage = clickedLink.querySelector('img');
    const newLargeImgAlt = thumbnailImage
      ? thumbnailImage.alt
      : 'Галерейне зображення';

    largeImg.src = newLargeImgSrc;
    largeImg.alt = newLargeImgAlt;
  }
});
