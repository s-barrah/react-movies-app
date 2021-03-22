// @ts-ignore
describe('Ensure Movie search end to end functionality', () => {
    it('Verify title and header', () => {
        cy.visit('/')
            .wait(1000)
            .reload(true)
            .title().should('eq', 'React Movie App')
            .get('.main-container').should('be.visible')
            .get('.main-bar').should('be.visible')
            .get('.main-title').should('contain', 'Welcome to your movies search page')
    });

    it('Verify all the elements present', () => {
        cy
            .get('.search-page-title').should('contain', 'Enter Your Search')
            .get('.main-instructions').should('contain', 'Please enter the name of two actors to search for movies where both appear')
            .get('.main-form').should('be.visible')
            .get('input.search-input').should('be.visible')
            .get('button.search-button').should('be.visible')
            .get('.results-title').should('not.exist')
            .get('.result-item').should('not.exist')
    });

    it('should not enter a numeric value', () => {
        cy
            .get('input.search-input:first')
            .type('999').should('have.value', '')
    });

    it('should enter a value and validate input', () => {
        cy
            .get('input.search-input:first')
            .type('test').should('have.value', 'test')
            .get('button.search-button').click()
            .get('input.search-input:first').should('have.class', 'error')
            .and('not.have.class', 'valid');
        cy
            .get('input.search-input:first')
            .clear().type('test, test, test').should('have.value', 'test, test, test')
            .get('button.search-button').click()
            .get('input.search-input:first').should('have.class', 'error')
            .and('not.have.class', 'valid');
    });

    it('should verify making a valid search and getting results', () => {
        cy
            .get('input.search-input:first')
            .clear().should('not.have.class', 'error')
            .type('Al Pacino, Robert De Niro').should('have.value', 'Al Pacino, Robert De Niro')
            .get('button.search-button').should('be.visible')
            .get('button.search-button').click().wait(2000)
            .get('.loading').should('be.visible')


    })
})
