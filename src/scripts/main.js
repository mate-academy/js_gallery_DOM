'use strict';

const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', function (incident) {
  incident.preventDefault();

  const target = incident.target.closest('a');

  if (!target) {
    return;
  }

  const mainImage = document.getElementById('largeImg');

  mainImage.setAttribute('src', target.getAttribute('href'));
});
