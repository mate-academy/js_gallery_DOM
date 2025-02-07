'use strict';

const smallPics = document.getElementById('thumbs');
const largePic = document.getElementById('largeImg');

smallPics.addEventListener('click', (ev) => {
  ev.preventDefault();

  const LinkLargePic = ev.target
    .closest('.list-item__link')
    .getAttribute('href');



  largePic.setAttribute('src', LinkLargePic);
});
