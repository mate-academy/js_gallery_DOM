'use strict';

const galleryList = document.querySelector('ul');

galleryList.addEventListener('click', (incident) => {
  const link = incident.target.closest('a');

  if (link) {
    incident.preventDefault();

    const lafgeImg = document.getElementById('largeImg');

    lafgeImg.src = link.href;
  }
});
