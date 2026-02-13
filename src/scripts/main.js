'use strict';

const largeImg = document.getElementById("largeImg")
const thumbs = document.getElementById("thumbs")

thumbs.addEventListener("click", (event) => {
  event.preventDefault();

  const link = event.target.closest("a")
  console.log(link)
  if (!link) return;

  largeImg.src = link.href;
})
