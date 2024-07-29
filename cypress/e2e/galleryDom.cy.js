'use strict';

// eslint-disable-next-line no-unused-vars
const baseUrl = Cypress.config().baseUrl;

const images = [
  '/images/landscape-first.png',
  '/images/landscape-second.png',
  '/images/landscape-third.png',
  '/images/landscape-fourth.png',
  '/images/landscape-fifth.png',
];

describe('Gallery application', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#largeImg').as('largeImg');
  });

  it('can click on a small `img` image', () => {
    for (let i = 0; i < images.length; i++) {
      cy.get(`li:nth-child(${i + 1})`).click();

      // eslint-disable-next-line max-len
      cy.get('@largeImg').should('have.attr', 'src').and('include', images[i]); // Перевірка відносного шляху
    }
  });

  it('can click on `a` outside of image', () => {
    for (let i = 0; i < images.length; i++) {
      cy.get(`[title="Image ${i + 1}"]`).click();

      // eslint-disable-next-line max-len
      cy.get('@largeImg').should('have.attr', 'src').and('include', images[i]); // Перевірка відносного шляху
    }
  });
});
