'use strict';

const url = Cypress.config().baseUrl;

const images = ['/images/landscape-first.png',
  '/images/landscape-second.png', '/images/landscape-third.png',
  '/images/landscape-fourth.png', '/images/landscape-fifth.png'];

describe('Gallery application', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#largeImg').as('largeImg');
  });

  it('can click on a small `img` image', () => {
    for (let i = 0; i < images.length; i++) {
      cy.get(`li:nth-child(${i + 1})`).click();
      cy.get('@largeImg').should('have.attr', 'src', `${url}${images[i]}`);
    };
  });

  it('can click on `a` outside of image', () => {
    for (let i = 0; i < images.length; i++) {
      cy.get(`[title="Image ${i + 1}"]`).click();
      cy.get('@largeImg').should('have.attr', 'src', `${url}${images[i]}`);
    };
  });
});
