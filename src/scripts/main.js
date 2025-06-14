const galleryList = document.querySelector('.gallery__list');
const listItems = galleryList.querySelectorAll('.list-item');

listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const clickedEl = e.target;
    let imgSrc;

    if (clickedEl.tagName === 'IMG') {
      const link = clickedEl.parentElement;

      imgSrc = link.getAttribute('href');
    } else if (clickedEl.tagName === 'A') {
      imgSrc = clickedEl.getAttribute('href');
    }

    if (imgSrc) {
      const largeImg = document.querySelector('#largeImg');

      largeImg.src = new URL(imgSrc, window.location.origin).href;
    }
  });
});
