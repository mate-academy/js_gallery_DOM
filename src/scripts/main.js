'use strict';

const buttons = document.getElementById('thumbs');

const imageNeedToChange = document.getElementById('largeImg');

buttons.addEventListener('click', (e) => {
  e.preventDefault();

  const targetItem = e.target.closest('.gallery__thumb');

  if (!targetItem) {
    return;
  }

  const link = targetItem.closest('a');

  if (!link) {
    return;
  }

  imageNeedToChange.src = link.href;
});
