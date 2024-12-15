'use strict';

document.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  const largeImageUrl = link.getAttribute('href');
  const largeImg = document.getElementById('largeImg');

  if (largeImg) {
    largeImg.setAttribute('src', largeImageUrl);
  }
});
