describe('Get User List', () => {
    it('Verify the list users will displayed', () => {
        cy.request({
            methode: 'GET',
            url: 'https://reqres.in/api/users'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});