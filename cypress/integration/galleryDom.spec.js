'use strict';

describe('Gallery application', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#largeImg').as('largeImg');

    const url = 'http://localhost:8080';
    const images = ['/images/landscape-first.png',
      '/images/landscape-second.png', '/images/landscape-third.png',
      '/images/landscape-fourth.png', '/images/landscape-fifth.png'];

    Cypress.Commands.add('beenSelected', (selector) => {
      for (let i = 0; i < images.length; i++) {
        cy.get(`${selector}(${i + 1})`).click();
        cy.get('@largeImg').should('have.attr', 'src', `${url}${images[i]}`);
      };
    });

    Cypress.Commands.add('abeenSelected', (selector) => {
      for (let i = 0; i < images.length; i++) {
        cy.get(`[${selector} ${i + 1}"]`).click();
        cy.get('@largeImg').should('have.attr', 'src', `${url}${images[i]}`);
      };
    });
  });

  it('can click on a small `img` image', () => {
    cy.beenSelected('li:nth-child');
  });

  it('can click on `a` outside of image', () => {
    cy.abeenSelected('title="Image');
  });
});
