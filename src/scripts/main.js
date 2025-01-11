'use strict';

const bigImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (a) => {
  // Find the closest <a> element from the click target
  const link = a.target.closest('a');

  // If there's no link (click outside of <a>), do nothing
  if (!link) {
    return;
  }

  // Prevent the default navigation behavior of <a>
  a.preventDefault();

  // Update the main image's src to the href of the clicked <a>
  bigImage.src = link.href;
});
