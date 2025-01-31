'use strict';
// Отримуємо елементи на сторінці

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

// Додаємо слухача подій на контейнер з міні-зображеннями
// eslint-disable-next-line no-shadow
gallery.addEventListener('click', (event) => {
  // Перевіряємо, чи натиснуто на <a> елемент,
  // який містить посилання на велике зображення
  if (event.target.closest('.list-item__link')) {
    // Отримуємо посилання (href) з того елементу, на який було натиснуто
    const largeImageURL = event.target
      .closest('.list-item__link')
      .getAttribute('href');

    // Перевіряємо, чи є шлях відносним, і додаємо базовий URL
    const fullImageURL = largeImageURL.startsWith('/')
      ? `http://localhost:3001${largeImageURL}`
      : largeImageURL;

    // Змінюємо атрибут src великого зображення
    largeImg.setAttribute('src', fullImageURL);

    // Запобігаємо переходу за посиланням
    // (якщо не хочемо, щоб сторінка перезавантажувалась)
    event.preventDefault();
  }
});
