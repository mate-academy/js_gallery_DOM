'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (action) => {
  action.preventDefault();

  const target = action.target;

  if (target.tagName.toLowerCase() === 'img') {
    const parentAnchor = target.parentElement;

    largeImg.src = parentAnchor.href;
  } else if (target.tagName.toLowerCase() === 'a') {
    largeImg.src = target.href;
  }
});
