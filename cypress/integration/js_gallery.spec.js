/* eslint-disable strict */
describe(('Tests'), () => {
  before(() => {
    cy.visit('/');
  });
  
  it('A click can be on a small `img` image', () => {
    cy.get('ul> li:nth-child(2)').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-second.png')

    cy.get('ul> li:nth-child(3)').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-third.png')

    cy.get('ul> li:nth-child(4)').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-fourth.png')
 
    cy.get('ul> li:nth-child(5)').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-fifth.png')

    cy.get('ul> li:nth-child(1)').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-first.png')
  });

  it('A click can be on a `a` outside of image.', () => {
    cy.get('ul > li:nth-child(2) > a').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-second.png')

    cy.get('ul > li:nth-child(3) > a').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-third.png')

    cy.get('ul > li:nth-child(4) > a').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-fourth.png')
 
    cy.get('ul > li:nth-child(5) > a').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-fifth.png')

    cy.get('ul > li:nth-child(1) > a').click()
    cy.get('[id="largeImg"]').should('have.attr', 'src', 'http://localhost:8080/images/landscape-first.png')
  });
});