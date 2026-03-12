'use strict';

// const gallery = document.querySelector('div.gallery');
// const largeImg = gallery.children[0];
// const thumbnails = gallery.children[1];

const largeImg = document.getElementById('largeImg');
const thumbnails = document.getElementById('thumbs');

thumbnails.addEventListener('click', (e) => {
  e.preventDefault();

  // const imageSource = e.target.closest('.list-item__link');
  // if (!imageSource) {
  //   return;
  // }

  const target = e.target;
  let imageSource;

  switch (target.tagName) {
    case 'A':
      imageSource = target;
      break;
    case 'IMG':
      imageSource = target.parentNode;
      break;
    case 'LI':
      imageSource = target.children[0];
      break;
    default:
      return;
  }

  // largeImg.setAttribute('src', imageSource.getAttribute('href'));
  largeImg.src = imageSource.href;
});
