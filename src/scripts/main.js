'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  let link = null;

  if (e.target.tagName === 'IMG') {
    link = e.target.closest('a');
  } else if (e.target.tagName === 'A') {
    link = e.target;
  }

  if (link && link.hasAttribute('href')) {
    e.preventDefault();
  }

  if (link) {
    const newSrc = link.getAttribute('href');

    largeImg.src = newSrc;
  }
});
