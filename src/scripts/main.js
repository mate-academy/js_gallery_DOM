'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

if (!thumbs || !largeImg) {
  throw new Error('The gallery does not exist');
}

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const newImg = e.target.closest('a');

  if (!newImg) {
    return;
  }

  const imgLink = newImg.getAttribute('href');

  largeImg.setAttribute('src', imgLink);
});
