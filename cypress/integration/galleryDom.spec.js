/* eslint-disable strict */
/// <reference types = "Cypress" />

describe(('Gallery application'), () => {
  const url = 'http://localhost:8080';

  beforeEach(() => {
    cy.visit('/');
    cy.get('[id="largeImg"]').as('largeImg');
  });

  it('A click can be on a small `img` image', () => {
    cy.get('ul > li:nth-child(2)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-second.png');

    cy.get('ul > li:nth-child(3)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-third.png');

    cy.get('ul > li:nth-child(4)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-fourth.png');
 
    cy.get('ul > li:nth-child(5)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-fifth.png');

    cy.get('ul > li:nth-child(1)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-first.png');
  });

  it('A click can be on a `a` outside of image', () => {
    cy.get('[title="Image 2"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-second.png');

    cy.get('[title="Image 3"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-third.png');

    cy.get('[title="Image 4"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-fourth.png');
 
    cy.get('[title="Image 5"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-fifth.png');

    cy.get('[title="Image 1"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + '/images/landscape-first.png');
  });
});
