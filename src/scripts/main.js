'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const linkElement = clickEvent.target.closest('a');

  if (linkElement) {
    const imageUrl = linkElement.href;

    largeImg.src = imageUrl;
  }
});
