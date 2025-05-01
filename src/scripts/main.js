'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbsContainer = document.querySelector('#thumbs');

thumbsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  let target = e.target;

  // If the clicked element is <img>, get its parent <a>
  if (target.tagName.toLowerCase() === 'img') {
    target = target.parentElement;
  }

  // Check if the target is an <a> element
  if (target.tagName.toLowerCase() === 'a') {
    mainImage.src = target.href;
  }
});
