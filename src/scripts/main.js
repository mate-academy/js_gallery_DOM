'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
  const link = target.closest('a');

  if (link && thumbs.contains(link)) {
    const largeImage = link.getAttribute('href');
    const imageTitle = link.getAttribute('title');
    const largeImg = document.getElementById('largeImg');

    largeImg.src = largeImage;
    largeImg.alt = imageTitle;
  }
});
