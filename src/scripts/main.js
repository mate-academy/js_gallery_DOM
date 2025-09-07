'use strict';

/**
 * Init Gallery
 *
 * @param imageViewSel view image selector
 * @param listContainerSel thumb image container selector
 */
function init(imageViewSel, listContainerSel) {
  const imageView = document.querySelector(imageViewSel);
  const listContainer = document.querySelector(listContainerSel);

  if (!imageView || !listContainer) {
    return;
  }

  listContainer.addEventListener('click', (e) => {
    // looking for closest "a" on click (image container)
    const link = e.target.closest('.list-item__link');

    // skip in case, when it's not in container
    if (!link || !listContainer.contains(link)) {
      return;
    }

    // skip default event flow
    e.preventDefault();
    // change src and alternative (hint title)
    imageView.src = link.href || '#';
    imageView.alt = link.title || '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init('.gallery #largeImg', '#thumbs');
});
