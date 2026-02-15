'use strict';

// Get the thumbnails container element from the DOM.
const thumbs = document.querySelector('#thumbs');
// Get the main large image element that should be updated on click.
const largeImg = document.querySelector('#largeImg');

// Listen for clicks on the thumbnails container using event delegation.
thumbs.addEventListener('click', (clickEvent) => {
  // Find the nearest anchor element for both img clicks and a clicks.
  const link = clickEvent.target.closest('a');

  // Stop execution when the click is outside a valid thumbnail link.
  if (!link || !thumbs.contains(link)) {
    // Exit the handler early for invalid click targets.
    return;
  }
  // Cancel the anchor's default action (opening href), because in this task
  // the click should only update the existing large image inside the same page.
  clickEvent.preventDefault();
  // Use the resolved absolute URL from the anchor so tests get full src value.
  largeImg.src = link.href;
  // Set the large image alt text from the link title for accessibility.
  largeImg.alt = link.getAttribute('title');
});
