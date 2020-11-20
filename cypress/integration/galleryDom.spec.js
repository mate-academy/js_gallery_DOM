'use strict';

describe(('Gallery application'), () => {
  const url = 'http://localhost:8080';
  const imageSec = '/images/landscape-second.png';
  const imageThird = '/images/landscape-third.png';
  const imageFourth = '/images/landscape-fourth.png';
  const imageFifth = '/images/landscape-fifth.png';
  const imageFirst = '/images/landscape-first.png';

  beforeEach(() => {
    cy.visit('/');
    cy.get('[id="largeImg"]').as('largeImg');
  });

  it('can click on a small `img` image', () => {
    cy.get('ul li:nth-child(2)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageSec);

    cy.get('ul li:nth-child(3)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageThird);

    cy.get('ul li:nth-child(4)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageFourth);

    cy.get('ul li:nth-child(5)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageFifth);

    cy.get('ul li:nth-child(1)').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageFirst);
  });

  it('can click on `a` outside of image', () => {
    cy.get('[title="Image 2"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageSec);

    cy.get('[title="Image 3"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageThird);

    cy.get('[title="Image 4"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageFourth);

    cy.get('[title="Image 5"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageFifth);

    cy.get('[title="Image 1"]').click();
    cy.get('@largeImg').should('have.attr', 'src', url + imageFirst);
  });
});
