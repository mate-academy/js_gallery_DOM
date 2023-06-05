'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(e) {
  event.preventDefault();

  const target = e.target.tagName.toLowerCase();

  if (target === 'img' || target === 'a') {
    const newSrc = e.target.parentNode.getAttribute('href');

    largeImg.src = newSrc;
  }
});
