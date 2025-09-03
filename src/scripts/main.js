'use strict';

// 1. Select gallery elements
const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.main-image');

// 2. Delegate clicks inside the gallery
gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  let link;

  // If click is on <img>, take its parent <a>
  if (ev.target.tagName.toLowerCase() === 'img') {
    link = ev.target.closest('a');
  }

  // If click is on <a>, use it directly
  if (ev.target.tagName.toLowerCase() === 'a') {
    link = ev.target;
  }

  // If neither <a> nor <img>, ignore
  if (!link) {
    return;
  }

  // 3. Get large image URL from <a href="">
  const largeSrc = link.getAttribute('href');

  // 4. Update the main image src
  mainImage.setAttribute('src', largeSrc);
});
