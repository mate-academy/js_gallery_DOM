'use strict';

const thumbs = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const linkImg = e.target.parentElement.getAttribute('href');

    mainImage.setAttribute('src', linkImg);
  };
});
