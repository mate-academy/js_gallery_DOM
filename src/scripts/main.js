'use strict';

const gallery = document.getElementById('thumbs')
const largeImg = document.getElementById('largeImg')
console.log(largeImg)

gallery.addEventListener('click', function (event) {
  event.preventDefault();

  const target = event.target;
  const link = target.closest('a')
  console.log(link)

  largeImg.src = link.href;
  largeImg.alt = link.title
})

