'use strict';

const el = document.querySelector('ul');
const largeImg = document.getElementById('largeImg');

el.addEventListener('click', ChangeImg);

function ChangeImg(e) {
  e.preventDefault();

  if (!e.target.href) {
    largeImg.src = e.target.closest('a').href;
  } else {
    largeImg.src = e.target.href;
  }
}
