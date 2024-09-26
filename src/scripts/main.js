'use strict';

const list = document.getElementById('thumbs');
const largeImage = document.querySelector('#largeImg');
const liCollection = document.querySelectorAll('.list-item__link');

for (const item of liCollection) {
  item.onclick = (e) => {
    e.preventDefault();
  };
}

list.addEventListener('click', function(evnt) {
  const item = evnt.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImage.setAttribute('src', item.getAttribute('href'));
});
