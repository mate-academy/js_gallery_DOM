'use strict';

const thumbs = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg')

thumbs.addEventListener('click', (event) => {
  const link = event.target.closest('.list-item__link')
  if (link) {
    event.preventDefault()
    mainImg.src = link.href
  }
});

