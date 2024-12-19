'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();

    const linkImage = e.target.closest('a').href;

    largeImg.setAttribute('src', linkImage);
  }
});
