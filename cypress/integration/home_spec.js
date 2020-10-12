describe("Homepage", () => {
  it("Should load homepage", () => {
    cy.visit("/");
    // The website shows in the url
    cy.url().should("include", "http://localhost:3000/");
    cy.title().should("eq", "React App");
  });

  it('Should show logo', () => {
    cy.wait(2000)  
    cy.get('.navbar__logo').should('be.visible').should('have.attr', 'src').should('include','Movieinfinity') ;
  });

  it('Should show header image and title', () => {
      cy.get('.movie_header').should('be.visible');
      cy.get('.movie__title').should('be.visible');
  });

  it('Should show navbar after scrolling', () => {
        cy.scrollTo(0,101);
        cy.get('.navbar').should('have.attr','class').should('include', 'navbar--black');
      }); 
    
  it('Should show movie section images ', () => {
    cy.get('.movieSection__image').should('be.visible').should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original/') ;
  });
     
});
