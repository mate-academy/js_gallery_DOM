'use strict';

const thumbs = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg')

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link')
  if (link) {
    e.preventDefault()
    mainImg.src = link.href
  }
});

