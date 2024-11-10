'use strict';

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  const img = event.target.closest('img');

  if (img) {
    event.preventDefault();

    const link = img.closest('a');

    if (link) {
      const largeImg = document.getElementById('largeImg');

      largeImg.src = link.getAttribute('href');
    }
  }
});
